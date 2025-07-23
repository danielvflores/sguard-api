Architect Model: ["ApiRest"]
Description: This API provides access to the SGuard system, allowing users to manage all configurations and personalize their security settings.

## Important Information
- **API Base URL:** `https://sguard-api.up.railway.app`
- **Authentication:** OAuth2 with Discord for secure access. All endpoints require a valid Discord OAuth2 token, and the API will verify that the user has the necessary permissions (e.g., admin/owner) for the specified guild before allowing access or modifications.
- **Rate Limiting:** Implemented to prevent abuse and ensure fair usage.
- **Documentation:** Available at `https://docs.sguard.com/api`
- **Versioning:** The API follows semantic versioning, with the current version being `v1`.
- **Deployment:** The API is deployed on Railway, ensuring high availability and scalability.
- **Strict Model:** Separation, Stateless, Resource-Based, Uniform Interface, Cacheable, Layered System.

## Main Features
- **Custom Configuration Management:** Manage and synchronize custom settings such as bot prefix, bot name, custom commands, message formats (embed or plain), log channels, and more—ensuring changes are reflected both in the Discord server and the dashboard.
- **Flexible Moderation Levels:** Choose between preset moderation levels (light, medium, strict) or fully customize all moderation options to fit your server’s needs.
- **Anti-Raid System:** Protect your server with advanced anti-raid features to detect and prevent malicious attacks.


## Endpoints
### Prefix
- **URL:** `/api/{guild_id}/prefix`
- **Methods:**
  - **GET:** Retrieves the current bot prefix for the server.
    - **Auth required:** Yes
    - **Response example:**
      ```json
      { "prefix": "!" }
      ```
  - **PUT:** Updates the bot prefix for the server.
    - **Auth required:** Yes
    - **Request body example:**
      ```json
      { "prefix": "?" }
      ```
    - **Response example:**
      ```json
      { "success": true, "prefix": "?" }
      ```

### Moderation Levels
- **URL:** `/api/{guild_id}/moderation`
- **Methods:**
    - **GET:** Retrieves the current moderation level settings for the server.
        - **Auth required:** Yes
        - **Response example:**
        ```json
        { "level": "light", "customSettings": { ... } }
        ```
    - **PUT:** Updates the moderation level settings for the server.
        - **Auth required:** Yes
        - **Request body example:**
        ```json
        { "level": "strict", "customSettings": { ... } }
        ```
        - **Response example:**
        ```json
        { "success": true, "level": "strict" }
        ```