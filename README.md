# ws

## Flow Chart

```mermaid
graph TD
    A[Start] --> B(User Login Page)
    B --> C{Authentication}
    C -->|Invalid User| D[Show User Login Page]
    D --> B(User Login Page)
    C -->|Valid User| E[Check Role]
    E -->|Admin| F[Show Admin Options]
    F -->|Manage Users| G[All ]
    E -->|User| Z[Show User Options]
```

