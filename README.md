# Next.js MongoDB CRUD Demo

A complete CRUD application built with Next.js 16, TypeScript, and MongoDB, featuring a clean architecture with repository pattern.

## 🚀 Features

- ✅ **Full CRUD Operations** - Create, Read, Update, Delete for Users and Page1 items
- 🗄️ **MongoDB Integration** - Connection pooling and proper database management
- 🏗️ **Clean Architecture** - Repository pattern with service layer
- ⚡ **Server Actions** - Next.js server actions for data mutations
- 🎨 **Beautiful UI** - Modern gradient design with Tailwind CSS
- 📱 **Responsive Design** - Works on all devices
- 🔒 **Type Safety** - Full TypeScript support

## 📁 Project Structure

```
├── app/
│   ├── page.tsx                # Home page
│   ├── page1/
│   │   ├── page.tsx           # CRUD demo page
│   │   └── actions.ts         # Server actions
│   └── layout.tsx             # Root layout
│
├── server/
│   ├── db/
│   │   └── mongodb.ts         # MongoDB connection
│   ├── models/
│   │   ├── user.model.ts      # User model
│   │   └── page1.model.ts     # Page1 model
│   ├── repositories/
│   │   ├── user.repo.ts       # User repository
│   │   └── page1.repo.ts      # Page1 repository
│   └── services/
│       ├── user.service.ts    # User service
│       └── page1.service.ts   # Page1 service
│
├── types/
│   ├── user.type.ts           # User types
│   └── page1.type.ts          # Page1 types
│
├── utils/
│   └── auth.ts                # Auth utilities
│
└── middleware.ts              # Next.js middleware
```

## 🛠️ Setup

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure MongoDB

Create a `.env.local` file in the root directory:

```env
MONGODB_URI=mongodb://localhost:27017/db1
```

Or for MongoDB Atlas:

```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/db1
```

### 3. Setup MongoDB Database

Make sure you have MongoDB running with:

- Database: `db1`
- Collections: `users`, `page1`

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the application.

## 📊 Database Schema

### Users Collection

```typescript
{
  _id: ObjectId,
  name: string,
  email: string,
  password: string,
  createdAt: Date,
  updatedAt: Date
}
```

### Page1 Collection

```typescript
{
  _id: ObjectId,
  title: string,
  description: string,
  status: 'active' | 'inactive',
  createdAt: Date,
  updatedAt: Date
}
```

## 🎯 CRUD Operations

The application supports full CRUD operations:

### Create

- Add new users with name, email, and password
- Add new page1 items with title, description, and status

### Read

- View all users and page1 items
- Display raw JSON data
- Filter by status (for page1 items)

### Update

- Toggle page1 item status (active/inactive)
- Update user and page1 item details

### Delete

- Delete users and page1 items with confirmation

## 🏗️ Architecture

### Repository Pattern

The application follows a clean architecture with three layers:

1. **Models** - Define database collections
2. **Repositories** - Handle database operations
3. **Services** - Contain business logic

### Server Actions

All data mutations are handled through Next.js server actions in `app/page1/actions.ts`, providing:

- Type-safe API calls
- Automatic revalidation
- Error handling

## 🎨 UI Features

- **Gradient Design** - Beautiful purple/pink/indigo gradients
- **Glassmorphism** - Modern backdrop blur effects
- **Tabs** - Switch between Users and Page1 items
- **Forms** - Create new entries with validation
- **Raw JSON Display** - View actual database data
- **Responsive** - Mobile-friendly design

## 🔧 Tech Stack

- **Next.js 16** - React framework
- **TypeScript** - Type safety
- **MongoDB** - Database
- **Tailwind CSS** - Styling
- **Server Actions** - Data mutations

## 📝 Notes

- The `.env.local` file is gitignored for security
- Use `.env.example` as a template
- Password hashing is not implemented (placeholder in `utils/auth.ts`)
- Authentication is not implemented (placeholder structure provided)

## 🚀 Deployment

1. Set up MongoDB Atlas or your MongoDB instance
2. Add `MONGODB_URI` to your deployment environment variables
3. Deploy to Vercel, Netlify, or your preferred platform

## 📄 License

MIT
