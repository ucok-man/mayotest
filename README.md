## Arsitektur SOLID

Project ini dibangun dengan prinsip SOLID:

### 1. Single Responsibility Principle (SRP)

- Setiap component hanya memiliki satu tanggung jawab
- Contoh: Button.tsx hanya untuk rendering button, Badge.tsx hanya untuk badge

### 2. Open/Closed Principle (OCP)

- Component dapat diextend tanpa modifikasi
- Contoh: Card component dengan CardHeader, CardBody, CardFooter

### 3. Liskov Substitution Principle (LSP)

- Repository implementations dapat diganti tanpa break code
- Semua repository implement interface yang sama

### 4. Interface Segregation Principle (ISP)

- Interface repository dipecah berdasarkan kebutuhan
- IProductRepository, IRobuxRepository, IOrderRepository, dll

### 5. Dependency Inversion Principle (DIP)

- High-level modules (Pages) depend on abstractions (hooks)
- Low-level modules (Repositories) implement abstractions
- Contoh: useProducts(repository) - page tidak tahu detail implementasi

## Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## Technology Stack

- React 18 - UI Library
- TypeScript - Type safety
- Vite - Build tool
- React Router - Navigation
- TailwindCSS - Styling
- SOLID Principles - Architecture
