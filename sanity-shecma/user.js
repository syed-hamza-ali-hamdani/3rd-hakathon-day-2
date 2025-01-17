{
    "name": "user",
   Frontend: Next.js (TypeScript, Tailwind CSS)
   Backend: Sanity CMS (Headless CMS for structured content management)
   Database: Sanity CMS (GROQ queries for data retrieval)
   Authentication: NextAuth.js (Google, Email/Password, JWT-based authentication)
   API Management: Next.js API Routes
   Payment Gateway: Stripe (Secure transactions)
   Deployment: Vercel (Frontend), Sanity Hosting (CMS Backend)
   Browse and search products
   Add to cart and wishlist
   Secure checkout with Stripe
   Track orders and view order history
   Review and rate products
   Manage account settings
   Manage product listings
   View order details and earnings
   Manage inventory and stock
   Monitor transactions and disputes
   Generate reports and analytics
    "type": "document",
    "fields":
    { "name": "name", "type": "string" },
    { "name": "email", "type": "string", "unique": true },
    { "name": "role", "type": "string", "options": ["buyer", "admin"] },
    { "name": "password", "type": "string", "hidden": true }
    ]
   }