import { Button } from '@zippy-ui/core/dist/components/Button';

export default function Page() {
  return (
    <>
      <h3>Button</h3>

      <h4>Danger</h4>

      <div className="border rounded-md border-1 border-gray-300 p-3 flex dark:border-gray-700">
        <Button sx={{ mr: 2 }} intent="danger">
          solid danger
        </Button>

        <Button variant="outlined" intent="danger" sx={{ mr: 2 }}>
          outlined danger
        </Button>
      </div>

      <h4>Success</h4>

      <div className="border rounded-md border-1 border-gray-300 p-3 flex dark:border-gray-700">
        <Button sx={{ mr: 2 }} intent="success">
          solid success
        </Button>

        <Button variant="outlined" intent="success" sx={{ mr: 2 }}>
          outlined success
        </Button>
      </div>

      <h4>Warning</h4>

      <div className="border rounded-md border-1 border-gray-300 p-3 flex dark:border-gray-700">
        <Button sx={{ mr: 2 }} intent="warning">
          solid warning
        </Button>

        <Button variant="outlined" intent="warning" sx={{ mr: 2 }}>
          outlined warning
        </Button>
      </div>

      <h4>Info</h4>

      <div className="border rounded-md border-1 border-gray-300 p-3 flex dark:border-gray-700">
        <Button sx={{ mr: 2 }} intent="info">
          solid info
        </Button>

        <Button variant="outlined" intent="info" sx={{ mr: 2 }}>
          outlined info
        </Button>
      </div>

      <h4>None</h4>

      <div className="border rounded-md border-1 border-gray-300 p-3 flex dark:border-gray-700">
        <Button sx={{ mr: 2 }}>solid none</Button>

        <Button variant="outlined" sx={{ mr: 2 }}>
          outlined none
        </Button>
      </div>
    </>
  );
}
