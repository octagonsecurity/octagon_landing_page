System / device status indicator for monitoring UI — color-coded dot + label.

```jsx
<StatusPill status="armed" />
<StatusPill status="secure" />
<StatusPill status="warning">Needs Service</StatusPill>
<StatusPill status="offline" />
```

States: `armed` (red, pulses), `secure` (green), `warning` (amber), `offline` (gray). Default label comes from the state; pass children to override.
