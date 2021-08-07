import { Button } from '@zippy-ui/core/dist/components/Button';

export default function Page() {
  return (
    <>
      <h3>Button</h3>

      <h4>Danger</h4>

      <div className="border rounded-md border-1 border-gray-300 p-3 flex">
        <Button sx={{ mr: 2 }} intent="danger">
          solid danger
        </Button>

        <Button variant="outlined" intent="danger" sx={{ mr: 2 }}>
          outlined danger
        </Button>

        <Button variant="subtle" intent="danger">
          subtle danger
        </Button>
      </div>

      <h4>Success</h4>

      <div className="border rounded-md border-1 border-gray-300 p-3 flex">
        <Button sx={{ mr: 2 }} intent="success">
          solid success
        </Button>

        <Button variant="outlined" intent="success" sx={{ mr: 2 }}>
          outlined success
        </Button>

        <Button variant="subtle" intent="success">
          subtle success
        </Button>
      </div>

      <h4>Warning</h4>

      <div className="border rounded-md border-1 border-gray-300 p-3 flex">
        <Button sx={{ mr: 2 }} intent="warning">
          solid warning
        </Button>

        <Button variant="outlined" intent="warning" sx={{ mr: 2 }}>
          outlined warning
        </Button>

        <Button variant="subtle" intent="warning">
          subtle warning
        </Button>
      </div>

      <h4>Info</h4>

      <div className="border rounded-md border-1 border-gray-300 p-3 flex">
        <Button sx={{ mr: 2 }} intent="info">
          solid info
        </Button>

        <Button variant="outlined" intent="info" sx={{ mr: 2 }}>
          outlined info
        </Button>

        <Button variant="subtle" intent="info">
          subtle info
        </Button>
      </div>

      <h4>None</h4>

      <div className="border rounded-md border-1 border-gray-300 p-3 flex">
        <Button sx={{ mr: 2 }}>solid none</Button>

        <Button variant="outlined" sx={{ mr: 2 }}>
          outlined none
        </Button>

        <Button variant="subtle">subtle none</Button>
      </div>
    </>
  );
}