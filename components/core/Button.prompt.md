Primary call-to-action button — uppercase, squared, decisive; the brand's action element.

```jsx
<Button variant="primary" size="lg" href="tel:786-928-0986">Get a Quote</Button>
<Button variant="secondary">Learn More</Button>
<Button variant="dark" iconRight={<LucidePhone/>}>Call Us</Button>
```

Variants: `primary` (brand red, the main CTA), `secondary` (outlined), `dark` (near-black, for light bands), `ghost` (text-only link-style). Sizes `sm | md | lg`. Props: `block`, `disabled`, `iconLeft`, `iconRight`, `href` (renders as `<a>`). Labels render UPPERCASE automatically.
