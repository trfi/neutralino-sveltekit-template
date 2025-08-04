# Neutralino + SvelteKit Template

A modern, lightweight desktop application template combining the power of [Neutralino.js](https://neutralino.js.org) with [SvelteKit](https://kit.svelte.dev), TypeScript, and Vite for fast development and optimal performance.

## 🚀 Features

- **🪶 Lightweight**: Neutralino.js provides a smaller footprint alternative to Electron
- **⚡ Fast Development**: SvelteKit with Vite for instant HMR and blazing-fast builds
- **🎯 Type Safety**: Full TypeScript support throughout the project
- **📱 Cross-Platform**: Build for Windows, macOS, and Linux from a single codebase
- **🎨 Modern UI**: Clean, responsive design with dark/light mode support
- **🔧 Developer Experience**: Pre-configured with optimal settings and tooling

## 📋 Prerequisites

Before getting started, ensure you have the following installed:

- [Bun](https://bun.sh/) (recommended) or [Node.js](https://nodejs.org/) (v18 or higher)
- [Neutralino CLI](https://neutralino.js.org/docs/cli/neu-cli) (`npm install -g @neutralinojs/neu`)

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd neutralino-sveltekit-template
   ```

2. **Install dependencies**
   ```bash
   bun install
   # or
   npm install
   ```

3. **Initialize Neutralino**
   ```bash
   neu update
   ```

## 🏃‍♂️ Development

Start the development server with hot module replacement:

```bash
bun run dev
# or
npm run dev
```

This will:
- Start the Vite development server
- Launch the Neutralino desktop application
- Enable live reloading for both frontend and desktop app changes
- Provide developer tools access in the desktop app

## 🏗️ Building

Create a production build:

```bash
bun run build
# or
npm run build
```

The build process will:
1. Build the SvelteKit application optimized for production
2. Generate the Neutralino desktop application binaries
3. Output the final application in the `dist/` directory

## 📁 Project Structure

```
neutralino-sveltekit-template/
├── src/
│   ├── lib/                    # Reusable Svelte components
│   │   ├── App.svelte         # Main application component
│   │   ├── Counter.svelte     # Example counter component
│   │   └── NeutralinoCheck.svelte # Neutralino API demo
│   ├── routes/                # SvelteKit routes
│   │   ├── +layout.svelte     # Root layout
│   │   ├── +layout.ts         # Layout configuration
│   │   └── +page.svelte       # Home page
│   ├── app.css               # Global styles
│   ├── app.html             # HTML template
│   └── vite-env.d.ts        # Vite type definitions
├── static/                   # Static assets
├── public/                   # Public assets (icon, etc.)
├── neutralino.config.json   # Neutralino configuration
├── svelte.config.js        # SvelteKit configuration
├── vite.config.ts          # Vite configuration with Neutralino plugin
├── package.json            # Dependencies and scripts
└── tsconfig.json          # TypeScript configuration
```

## ⚙️ Configuration

### Neutralino Configuration

The `neutralino.config.json` file contains the desktop application settings:

- **Window properties**: Size, title, icon, resizability
- **Native API permissions**: Control which Neutralino APIs are accessible
- **Build settings**: Binary name, output paths, and versions

### SvelteKit Configuration

The `svelte.config.js` configures:

- **Adapter**: Uses `@sveltejs/adapter-static` for SPA generation
- **Aliases**: Convenient import paths for common directories
- **Build optimization**: Configured for Neutralino's static file requirements

### Vite Configuration

The `vite.config.ts` includes a custom Neutralino plugin that:

- Automatically starts the Neutralino app during development
- Copies assets and builds the desktop app in production
- Configures the development server for optimal integration

## 🔌 Available APIs

This template demonstrates integration with Neutralino's native APIs:

- **OS Operations**: Access file system, execute commands, get system info
- **Computer Info**: Retrieve hardware and operating system details
- **App Control**: Manage application lifecycle and window properties

Example usage in `src/lib/NeutralinoCheck.svelte`:

```typescript
import { computer } from '@neutralinojs/lib'
let osInfo = computer.getOSInfo()
```

## 📦 Scripts

| Command | Description |
|---------|-------------|
| `bun run dev` | Start development server with Neutralino app |
| `bun run build` | Build for production |
| `bun run preview` | Preview production build |
| `bun run check` | Run Svelte type checking |
| `bun run check:watch` | Run type checking in watch mode |

## 🎨 Styling

The template includes:

- **Modern CSS**: CSS variables for theming and responsive design
- **Dark/Light Mode**: Automatic system preference detection
- **Component Scoping**: Svelte's scoped styling capabilities
- **Responsive Layout**: Mobile-first approach with desktop optimizations

## 🔧 Customization

### Changing App Details

1. **Update `package.json`**: Modify name, description, and author
2. **Update `neutralino.config.json`**: Change applicationId, title, and window properties
3. **Replace icons**: Update files in `public/` and `static/` directories
4. **Modify metadata**: Update title and meta tags in `src/app.html`

### Adding New Features

1. **Create components**: Add new `.svelte` files in `src/lib/`
2. **Add routes**: Create new pages in `src/routes/`
3. **Integrate APIs**: Use Neutralino APIs for native functionality
4. **Style components**: Use scoped CSS or global styles in `src/app.css`

## 🚀 Deployment

### Desktop Distribution

After building, you'll find platform-specific binaries in the `dist/` directory:

- **Windows**: `.exe` executable
- **macOS**: `.app` bundle  
- **Linux**: Binary executable

### Code Signing (Recommended)

For production distribution, consider code signing your applications:

- **Windows**: Use `signtool` with a code signing certificate
- **macOS**: Use Xcode command line tools with Apple Developer certificate
- **Linux**: Use `gpg` for package signing

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

## 📄 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Neutralino.js](https://neutralino.js.org) - Lightweight cross-platform desktop app framework
- [SvelteKit](https://kit.svelte.dev) - Full-stack web framework
- [Vite](https://vitejs.dev) - Next generation frontend tooling
- [TypeScript](https://www.typescriptlang.org) - Typed JavaScript at scale

## 📚 Additional Resources

- [Neutralino.js Documentation](https://neutralino.js.org/docs/)
- [SvelteKit Documentation](https://kit.svelte.dev/docs)
- [Svelte Tutorial](https://svelte.dev/tutorial)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Vite Guide](https://vitejs.dev/guide/)

---

**Happy coding!** 🎉 If you find this template helpful, please consider giving it a ⭐ on GitHub.
