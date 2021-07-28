import { Badge } from '@zippy-ui/core/dist/components/Badge';

export default function Index() {
  return (
    <>
      <h1>⚡ Zippy UI</h1>
      <p class="lead -top-6 relative">Lightning fast components for Solid</p>

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
            <td><code>intent</code></td>
            <td><code>none</code></td>
            <td><code>none</code> | <code>danger</code> | <code>warning</code> | <code>success</code> | <code>info</code></td>
          </tr>
          <tr>
            <td><code>children</code></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>

      <Badge
        variant="outlined"
        intent="danger"
      >
        outlined danger
      </Badge>
      <Badge
        variant="solid"
        intent="danger"
      >
        solid danger
      </Badge>
      <Badge
        variant="subtle"
        intent="danger"
      >
        subtle danger
      </Badge>

      <br />

      <Badge
        variant="outlined"
        intent="success"
      >
        outlined success
      </Badge>
      <Badge
        variant="solid"
        intent="success"
      >
        solid success
      </Badge>
      <Badge
        variant="subtle"
        intent="success"
      >
        subtle success
      </Badge>

      <br />

      <Badge
        variant="outlined"
        intent="warning"
      >
        outlined warning
      </Badge>
      <Badge
        variant="solid"
        intent="warning"
      >
        solid warning
      </Badge>
      <Badge
        variant="subtle"
        intent="warning"
      >
        subtle warning
      </Badge>

      <br />

      <Badge
        variant="outlined"
        intent="info"
      >
        outlined info
      </Badge>
      <Badge
        variant="solid"
        intent="info"
      >
        solid info
      </Badge>
      <Badge
        variant="subtle"
        intent="info"
      >
        subtle info
      </Badge>

      <br />

      <Badge
        variant="outlined"
        intent="none"
      >
        outlined none
      </Badge>
      <Badge
        variant="solid"
        intent="none"
      >
        solid none
      </Badge>
      <Badge
        variant="subtle"
        intent="none"

      >
        subtle none
      </Badge>

    </>
  );
}
