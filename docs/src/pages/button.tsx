import { Button } from '@zippy-ui/core/dist/components/Button';

const ArchiveIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <polyline points="21 8 21 21 3 21 3 8" />
    <rect x="1" y="3" width="22" height="5" />
    <line x1="10" y1="12" x2="14" y2="12" />
  </svg>
);

const InfoIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="8" x2="12" y2="12" />
    <line x1="12" y1="16" x2="12.01" y2="16" />
  </svg>
);

const WarningIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
    <line x1="12" y1="9" x2="12" y2="13" />
    <line x1="12" y1="17" x2="12.01" y2="17" />
  </svg>
);

const SaveIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />
    <polyline points="17 21 17 13 7 13 7 21" />
    <polyline points="7 3 7 8 15 8" />
  </svg>
);

const DangerIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2" />
    <line x1="12" y1="8" x2="12" y2="12" />
    <line x1="12" y1="16" x2="12.01" y2="16" />
  </svg>
);

const RightArrow = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

export default function Page() {
  return (
    <>
      <h2>Button</h2>

      <h3>Intent: Danger</h3>

      <h4>Variant: Solid</h4>

      <div className="border rounded-md border-1 border-gray-300 p-3 flex dark:border-gray-700">
        <Button sx={{ mr: 2 }} intent="danger">
          Remove user
        </Button>

        <Button sx={{ mr: 2 }} intent="danger" startIcon={DangerIcon}>
          Remove user
        </Button>

        <Button intent="danger" startIcon={DangerIcon} endIcon={RightArrow}>
          Remove user
        </Button>
      </div>

      <h4>Variant: Outlined</h4>

      <div className="border rounded-md border-1 border-gray-300 p-3 flex dark:border-gray-700">
        <Button variant="outlined" intent="danger" sx={{ mr: 2 }}>
          Remove user
        </Button>

        <Button
          variant="outlined"
          intent="danger"
          sx={{ mr: 2 }}
          startIcon={DangerIcon}
        >
          Remove user
        </Button>

        <Button
          variant="outlined"
          intent="danger"
          startIcon={DangerIcon}
          endIcon={RightArrow}
        >
          Remove user
        </Button>
      </div>

      <h3>Intent: Success</h3>

      <h4>Variant: Solid</h4>

      <div className="border rounded-md border-1 border-gray-300 p-3 flex dark:border-gray-700">
        <Button sx={{ mr: 2 }} intent="success">
          Save user
        </Button>

        <Button sx={{ mr: 2 }} intent="success" startIcon={SaveIcon}>
          Save user
        </Button>

        <Button intent="success" startIcon={SaveIcon} endIcon={RightArrow}>
          Save user
        </Button>
      </div>

      <h4>Variant: Outlined</h4>

      <div className="border rounded-md border-1 border-gray-300 p-3 flex dark:border-gray-700">
        <Button variant="outlined" intent="success" sx={{ mr: 2 }}>
          Save user
        </Button>

        <Button
          variant="outlined"
          intent="success"
          sx={{ mr: 2 }}
          startIcon={SaveIcon}
        >
          Save user
        </Button>

        <Button
          variant="outlined"
          intent="success"
          startIcon={SaveIcon}
          endIcon={RightArrow}
        >
          Save user
        </Button>
      </div>

      <h3>Intent: Warning</h3>

      <h4>Variant: Solid</h4>

      <div className="border rounded-md border-1 border-gray-300 p-3 flex dark:border-gray-700">
        <Button sx={{ mr: 2 }} intent="warning">
          Confirm operation
        </Button>

        <Button sx={{ mr: 2 }} intent="warning" startIcon={WarningIcon}>
          Confirm operation
        </Button>

        <Button intent="warning" startIcon={WarningIcon} endIcon={RightArrow}>
          Confirm operation
        </Button>
      </div>

      <h4>Variant: Outlined</h4>

      <div className="border rounded-md border-1 border-gray-300 p-3 flex dark:border-gray-700">
        <Button variant="outlined" intent="warning" sx={{ mr: 2 }}>
          Confirm operation
        </Button>

        <Button
          variant="outlined"
          intent="warning"
          sx={{ mr: 2 }}
          startIcon={WarningIcon}
        >
          Confirm operation
        </Button>

        <Button
          variant="outlined"
          intent="warning"
          startIcon={WarningIcon}
          endIcon={RightArrow}
        >
          Confirm operation
        </Button>
      </div>

      <h3>Intent: Info</h3>

      <h4>Variant: Solid</h4>

      <div className="border rounded-md border-1 border-gray-300 p-3 flex dark:border-gray-700">
        <Button sx={{ mr: 2 }} intent="info">
          Load data
        </Button>

        <Button sx={{ mr: 2 }} intent="info" startIcon={InfoIcon}>
          Load data
        </Button>

        <Button intent="info" startIcon={InfoIcon} endIcon={RightArrow}>
          Load data
        </Button>
      </div>

      <h4>Variant: Outlined</h4>

      <div className="border rounded-md border-1 border-gray-300 p-3 flex dark:border-gray-700">
        <Button variant="outlined" intent="info" sx={{ mr: 2 }}>
          Load data
        </Button>

        <Button
          variant="outlined"
          intent="info"
          sx={{ mr: 2 }}
          startIcon={InfoIcon}
        >
          Load data
        </Button>

        <Button
          variant="outlined"
          intent="info"
          startIcon={InfoIcon}
          endIcon={RightArrow}
        >
          Load data
        </Button>
      </div>

      <h3>Intent: None</h3>

      <h4>Variant: Solid</h4>

      <div className="border rounded-md border-1 border-gray-300 p-3 flex dark:border-gray-700">
        <Button sx={{ mr: 2 }} intent="none">
          Archive data
        </Button>

        <Button sx={{ mr: 2 }} intent="none" startIcon={ArchiveIcon}>
          Archive data
        </Button>

        <Button intent="none" startIcon={ArchiveIcon} endIcon={RightArrow}>
          Archive data
        </Button>
      </div>

      <h4>Variant: Outlined</h4>

      <div className="border rounded-md border-1 border-gray-300 p-3 flex dark:border-gray-700">
        <Button variant="outlined" intent="none" sx={{ mr: 2 }}>
          Archive data
        </Button>

        <Button
          variant="outlined"
          intent="none"
          sx={{ mr: 2 }}
          startIcon={ArchiveIcon}
        >
          Archive data
        </Button>

        <Button
          variant="outlined"
          intent="none"
          startIcon={ArchiveIcon}
          endIcon={RightArrow}
        >
          Archive data
        </Button>
      </div>
    </>
  );
}
