import { Badge } from '@zippy-ui/core/dist/components/Badge';
import { Button } from '@zippy-ui/core/dist/components/Button';

export default function Index() {
  return (
    <>
      <h1>⚡ Zippy UI</h1>
      <p class="lead -top-6 relative">Lightning fast components for Solid</p>

      <h3>Button</h3>

      <h4>Success</h4>

      <div class="border rounded-md border-1 border-gray-300 p-3 flex">
        <Button
          sx={{ mr: 2 }}
          intent="success"
        >
          solid success
        </Button>

        <Button
          variant="outlined"
          intent="success"
          sx={{ mr: 2 }}
        >
          outlined success
        </Button>

        <Button
          variant="subtle"
          intent="success"
        >
          subtle success
        </Button>
      </div>

      <h4>None</h4>

      <div class="border rounded-md border-1 border-gray-300 p-3 flex">
        <Button sx={{ mr: 2 }}>solid none</Button>

        <Button
          variant="outlined"
          sx={{ mr: 2 }}
        >
          outlined none
        </Button>

        <Button variant="subtle">subtle none</Button>
      </div>

      <h3>Badge</h3>

      <table>
        <thead><tr><th>Prop</th><th>Default value</th><th>Values</th></tr></thead>
        <tbody>
          <tr>
            <td><code>variant</code></td>
            <td><code>solid</code></td>
            <td><code>solid</code> | <code>outlined</code> | <code>subtle</code></td>
          </tr>
          <tr>
            <td><code>size</code></td>
            <td><code>default</code></td>
            <td><code>small</code> | <code>default</code> | <code>large</code></td>
          </tr>
          <tr>
            <td><code>intent</code></td>
            <td><code>none</code></td>
            <td><code>none</code> | <code>danger</code> | <code>warning</code> | <code>success</code> | <code>info</code></td>
          </tr>
          <tr>
            <td><code>sx</code></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td><code>children</code></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>

      <h4>Danger</h4>

      <div class="border rounded-md border-1 border-gray-300 p-3 flex">
        <Badge
          variant="outlined"
          intent="danger"
          sx={{
            mr: 2
          }}
        >
          outlined danger
        </Badge>

        <Badge
          variant="solid"
          intent="danger"
          sx={{
            mr: 2
          }}
        >
          solid danger
        </Badge>
        <Badge
          variant="subtle"
          intent="danger"
        >
          subtle danger
        </Badge>
      </div>

      <h4>Success</h4>

      <div class="border rounded-md border-1 border-gray-300 p-3 flex">
        <Badge
          variant="outlined"
          intent="success"
          sx={{
            mr: 2
          }}
        >
          outlined success
        </Badge>
        <Badge
          variant="solid"
          intent="success"
          sx={{
            mr: 2
          }}
        >
          solid success
        </Badge>
        <Badge
          variant="subtle"
          intent="success"
        >
          subtle success
        </Badge>
      </div>

      <h4>Warning</h4>

      <div class="border rounded-md border-1 border-gray-300 p-3 flex">
        <Badge
          variant="outlined"
          intent="warning"
          sx={{
            mr: 2
          }}
        >
          outlined warning
        </Badge>
        <Badge
          variant="solid"
          intent="warning"
          sx={{
            mr: 2
          }}
        >
          solid warning
        </Badge>
        <Badge
          variant="subtle"
          intent="warning"
        >
          subtle warning
        </Badge>
      </div>

      <h4>Info</h4>

      <div class="border rounded-md border-1 border-gray-300 p-3 flex">
        <Badge
          variant="outlined"
          intent="info"
          sx={{
            mr: 2
          }}
        >
          outlined info
        </Badge>
        <Badge
          variant="solid"
          intent="info"
          sx={{
            mr: 2
          }}
        >
          solid info
        </Badge>
        <Badge
          variant="subtle"
          intent="info"
        >
          subtle info
        </Badge>
      </div>

      <h4>None</h4>

      <div class="border rounded-md border-1 border-gray-300 p-3 flex">
        <Badge
          variant="outlined"
          intent="none"
          sx={{
            mr: 2
          }}
        >
          outlined none
        </Badge>
        <Badge
          variant="solid"
          intent="none"
          sx={{
            mr: 2
          }}
        >
          solid none
        </Badge>
        <Badge
          variant="subtle"
          intent="none"

        >
          subtle none
        </Badge>
      </div>
    </>
  );
}
