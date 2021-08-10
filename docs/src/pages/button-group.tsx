import { Button } from '@zippy-ui/core/dist/components/Button';
import { ButtonGroup } from '@zippy-ui/core/dist/components/ButtonGroup';

export default function Page() {
  return (
    <>
      <h3>Button group</h3>

      <h4>Outlined</h4>

      <div className="border rounded-md border-1 border-gray-300 p-3 flex dark:border-gray-700 mt-4">
        <ButtonGroup>
          <Button intent="danger" variant="outlined">
            outlined danger
          </Button>
        </ButtonGroup>
      </div>
      <div className="border rounded-md border-1 border-gray-300 p-3 flex dark:border-gray-700 mt-4">
        <ButtonGroup>
          <Button intent="danger" variant="outlined">
            outlined danger
          </Button>
          <Button intent="success" variant="outlined">
            outlined success
          </Button>
        </ButtonGroup>
      </div>
      <div className="border rounded-md border-1 border-gray-300 p-3 flex dark:border-gray-700 mt-4">
        <ButtonGroup>
          <Button intent="danger" variant="outlined">
            outlined danger
          </Button>
          <Button intent="success" variant="outlined">
            outlined success
          </Button>
          <Button intent="warning" variant="outlined">
            outlined warning
          </Button>
        </ButtonGroup>
      </div>
      <div className="border rounded-md border-1 border-gray-300 p-3 flex dark:border-gray-700 mt-4">
        <ButtonGroup>
          <Button intent="danger" variant="outlined">
            outlined danger
          </Button>
          <Button intent="success" variant="outlined">
            outlined success
          </Button>
          <Button intent="warning" variant="outlined">
            outlined warning
          </Button>
          <Button intent="info" variant="outlined">
            outlined info
          </Button>
        </ButtonGroup>
      </div>
      <div className="border rounded-md border-1 border-gray-300 p-3 flex dark:border-gray-700 mt-4">
        <ButtonGroup>
          <Button intent="danger" variant="outlined">
            outlined danger
          </Button>
          <Button intent="success" variant="outlined">
            outlined success
          </Button>
          <Button intent="warning" variant="outlined">
            outlined warning
          </Button>
          <Button intent="info" variant="outlined">
            outlined info
          </Button>
          <Button intent="none" variant="outlined">
            outlined none
          </Button>
        </ButtonGroup>
      </div>

      <h4>Solid</h4>

      <div className="border rounded-md border-1 border-gray-300 p-3 flex dark:border-gray-700 mt-4">
        <ButtonGroup>
          <Button intent="danger">outlined danger</Button>
        </ButtonGroup>
      </div>
      <div className="border rounded-md border-1 border-gray-300 p-3 flex dark:border-gray-700 mt-4">
        <ButtonGroup>
          <Button intent="danger">outlined danger</Button>
          <Button intent="success">outlined success</Button>
        </ButtonGroup>
      </div>
      <div className="border rounded-md border-1 border-gray-300 p-3 flex dark:border-gray-700 mt-4">
        <ButtonGroup>
          <Button intent="danger">outlined danger</Button>
          <Button intent="success">outlined success</Button>
          <Button intent="warning">outlined warning</Button>
        </ButtonGroup>
      </div>
      <div className="border rounded-md border-1 border-gray-300 p-3 flex dark:border-gray-700 mt-4">
        <ButtonGroup>
          <Button intent="danger">outlined danger</Button>
          <Button intent="success">outlined success</Button>
          <Button intent="warning">outlined warning</Button>
          <Button intent="info">outlined info</Button>
        </ButtonGroup>
      </div>
      <div className="border rounded-md border-1 border-gray-300 p-3 flex dark:border-gray-700 mt-4">
        <ButtonGroup>
          <Button intent="danger">outlined danger</Button>
          <Button intent="success">outlined success</Button>
          <Button intent="warning">outlined warning</Button>
          <Button intent="info">outlined info</Button>
          <Button intent="none">outlined none</Button>
        </ButtonGroup>
      </div>
    </>
  );
}
