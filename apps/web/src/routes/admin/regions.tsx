import {
  Button,
  Card,
  FieldError,
  Form as HeroForm,
  Input,
  Label,
  Modal,
  Table,
  useOverlayState,
} from '@heroui/react'
import { useMutation, useQueryClient, useSuspenseQuery } from '@tanstack/react-query'
import { createFileRoute } from '@tanstack/react-router'
import { useForm } from '@tanstack/react-form'
import { Edit2, MapPin, Plus, Trash2 } from 'lucide-react'
import * as React from 'react'
import { toast } from 'sonner'
import { z } from 'zod'
import { useHandleError } from '~/hooks/use-handle-error'
import { authApiClient } from '~/lib/api-client'
import type { SelectRegion } from 'api/client'

const regionSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  sourceId: z.string().min(1, 'Source ID is required'),
  parentId: z.string().optional(),
})

type RegionFormValues = z.infer<typeof regionSchema>

export const Route = createFileRoute('/admin/regions')({
  component: RegionsPage,
})

function RegionsPage() {
  const queryClient = useQueryClient()
  const handleError = useHandleError()
  const modalState = useOverlayState()
  const [editingId, setEditingId] = React.useState<number | null>(null)

  const { data: regions } = useSuspenseQuery({
    queryKey: ['admin', 'regions'],
    queryFn: async () => {
      const res = await authApiClient.regions.$get({})
      if (!res.ok)
        throw res
      return (await res.json()) as unknown as SelectRegion[]
    },
  })

  const mutation = useMutation({
    mutationFn: async (values: RegionFormValues) => {
      const parentId = values.parentId ? Number(values.parentId) : undefined
      const payload = {
        name: values.name,
        sourceId: values.sourceId,
        parentId: parentId,
      }
      
      const res = editingId
        ? await authApiClient.regions[':id'].$patch({ 
            param: { id: String(editingId) }, 
            json: payload, 
            header: { Authorization: '' } 
          })
        : await authApiClient.regions.$post({ 
            json: payload, 
            header: { Authorization: '' } 
          })
      if (!res.ok)
        throw res
      return res.json()
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin', 'regions'] })
      toast.success(editingId ? 'Region updated' : 'Region created')
      modalState.close()
      setEditingId(null)
    },
    onError: handleError,
  })

  const form = useForm({
    defaultValues: {
      name: '',
      sourceId: '',
      parentId: '',
    },
    onSubmit: async ({ value }) => {
      await mutation.mutateAsync(value)
    },
  })

  const handleEdit = (region: SelectRegion) => {
    setEditingId(region.id)
    form.reset({
      name: region.name,
      sourceId: region.sourceId || '',
      parentId: region.parentId ? String(region.parentId) : '',
    })
    modalState.open()
  }

  const handleAdd = () => {
    setEditingId(null)
    form.reset({
      name: '',
      sourceId: '',
      parentId: '',
    })
    modalState.open()
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground">Regions</h1>
          <p className="text-muted mt-1 font-medium">Manage geographical areas and administrative levels.</p>
        </div>
        <Button variant="primary" onPress={handleAdd}>
          <Plus className="size-4 mr-2" />
          {' '}
          Add Region
        </Button>
      </div>

      <Card variant="secondary">
        <Table>
          <Table.ScrollContainer>
            <Table.Content aria-label="Regions table">
              <Table.Header>
                <Table.Column isRowHeader>Area Name</Table.Column>
                <Table.Column>Source ID</Table.Column>
                <Table.Column>Parent ID</Table.Column>
                <Table.Column className="text-right">Actions</Table.Column>
              </Table.Header>
              <Table.Body>
                {regions.map((item) => (
                  <Table.Row key={item.id}>
                    <Table.Cell>
                      <div className="flex items-center gap-2">
                        <MapPin className="size-4 text-primary/60" />
                        <span className="font-bold">{item.name}</span>
                      </div>
                    </Table.Cell>
                    <Table.Cell><code className="text-xs bg-muted px-1 rounded">{item.sourceId}</code></Table.Cell>
                    <Table.Cell>
                      {item.parentId ? <code className="text-xs text-muted">{item.parentId}</code> : <span className="text-xs italic text-muted-foreground">Root</span>}
                    </Table.Cell>
                    <Table.Cell>
                      <div className="flex justify-end gap-2">
                        <Button variant="ghost" size="sm" isIconOnly onPress={() => handleEdit(item)}>
                          <Edit2 className="size-4" />
                        </Button>
                        <Button variant="ghost" className="text-danger" size="sm" isIconOnly>
                          <Trash2 className="size-4" />
                        </Button>
                      </div>
                    </Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table.Content>
          </Table.ScrollContainer>
        </Table>
      </Card>

      <Modal>
        <Modal.Backdrop isOpen={modalState.isOpen} onOpenChange={open => !open && modalState.close()} variant="blur">
          <Modal.Container size="md">
            <Modal.Dialog>
              <Modal.CloseTrigger />
              <Modal.Header><Modal.Heading>{editingId ? 'Edit Region' : 'New Region'}</Modal.Heading></Modal.Header>
              <Modal.Body>
                <form 
                  className="flex flex-col gap-4" 
                  onSubmit={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    form.handleSubmit()
                  }}
                >
                  <form.Field
                    name="name"
                    validators={{
                      onChange({ value }) { return !value ? 'Name is required' : undefined },
                    }}
                  >
                    {(field) => (
                      <div className="flex flex-col gap-1">
                        <Label htmlFor={field.name}>Region Name</Label>
                        <Input 
                          id={field.name}
                          name={field.name}
                          value={field.state.value} 
                          onChange={(e) => field.handleChange(e.target.value)}
                          onBlur={field.handleBlur}
                          placeholder="e.g. Tokyo" 
                          data-invalid={field.state.meta.errors.length > 0} 
                        />
                        {field.state.meta.errors ? (
                          <FieldError>{field.state.meta.errors.join(', ')}</FieldError>
                        ) : null}
                      </div>
                    )}
                  </form.Field>

                  <form.Field
                    name="sourceId"
                    validators={{
                      onChange({ value }) { return !value ? 'Source ID is required' : undefined },
                    }}
                  >
                    {(field) => (
                      <div className="flex flex-col gap-1">
                        <Label htmlFor={field.name}>Source ID</Label>
                        <Input 
                          id={field.name}
                          name={field.name}
                          value={field.state.value} 
                          onChange={(e) => field.handleChange(e.target.value)}
                          onBlur={field.handleBlur}
                          placeholder="e.g. tokyo_01" 
                          data-invalid={field.state.meta.errors.length > 0} 
                        />
                        {field.state.meta.errors ? (
                          <FieldError>{field.state.meta.errors.join(', ')}</FieldError>
                        ) : null}
                      </div>
                    )}
                  </form.Field>

                  <form.Field
                    name="parentId"
                  >
                    {(field) => (
                      <div className="flex flex-col gap-1">
                        <Label htmlFor={field.name}>Parent Region ID (Optional)</Label>
                        <Input 
                          id={field.name}
                          name={field.name}
                          value={field.state.value} 
                          onChange={(e) => field.handleChange(e.target.value)}
                          onBlur={field.handleBlur}
                          placeholder="Leave blank for root" 
                        />
                      </div>
                    )}
                  </form.Field>

                  <form.Subscribe
                    selector={(state) => [state.canSubmit, state.isSubmitting]}
                  >
                    {([canSubmit, isSubmitting]) => (
                      <div className="flex justify-end gap-3 mt-4">
                        <Button variant="ghost" onPress={() => modalState.close()}>Cancel</Button>
                        <Button variant="primary" type="submit" isDisabled={!canSubmit || isSubmitting}>
                          {editingId ? 'Save Changes' : 'Create Region'}
                        </Button>
                      </div>
                    )}
                  </form.Subscribe>
                </form>
              </Modal.Body>
            </Modal.Dialog>
          </Modal.Container>
        </Modal.Backdrop>
      </Modal>
    </div>
  )
}