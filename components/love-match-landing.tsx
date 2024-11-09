// 'use client'

// import { Heart, Users, MessageCircle, Search } from "lucide-react"
// import { Button } from "@/components/ui/button"

// export function LoveMatchLandingComponent() {
//   return (
//     <div className="min-h-screen bg-gradient-to-b from-pink-100 to-red-100">
//       <header className="container mx-auto px-4 py-6">
//         <nav className="flex items-center justify-between">
//           <div className="flex items-center space-x-2">
//             <Heart className="h-8 w-8 text-red-500" />
//             <span className="text-2xl font-bold text-gray-800">LoveMatch</span>
//           </div>
//           <div className="space-x-4">
//             <Button variant="ghost">Log In</Button>
//             <Button>Sign Up</Button>
//           </div>
//         </nav>
//       </header>

//       <main className="container mx-auto px-4 py-12">
//         <section className="text-center">
//           <h1 className="text-4xl font-bold text-gray-800 mb-4">Find Your Perfect Match</h1>
//           <p className="text-xl text-gray-600 mb-8">Discover love with our intelligent matching algorithm</p>
//           <Button size="lg" className="bg-red-500 hover:bg-red-600">
//             Start Matching Now
//           </Button>
//         </section>

//         <section className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
//           <FeatureCard
//             icon={<Users className="h-12 w-12 text-red-500" />}
//             title="Large Community"
//             description="Join thousands of singles looking for love"
//           />
//           <FeatureCard
//             icon={<Search className="h-12 w-12 text-red-500" />}
//             title="Smart Matching"
//             description="Our algorithm finds your most compatible matches"
//           />
//           <FeatureCard
//             icon={<MessageCircle className="h-12 w-12 text-red-500" />}
//             title="Safe Communication"
//             description="Connect securely with potential matches"
//           />
//         </section>

//         <section className="mt-20 text-center">
//           <h2 className="text-3xl font-bold text-gray-800 mb-4">Ready to Find Love?</h2>
//           <p className="text-xl text-gray-600 mb-8">Join LoveMatch today and start your journey to happiness</p>
//           <Button size="lg" className="bg-red-500 hover:bg-red-600">
//             Create Your Profile
//           </Button>
//         </section>
//       </main>

//       <footer className="bg-gray-100 mt-20 py-8">
//         <div className="container mx-auto px-4 text-center text-gray-600">
//           <p>&copy; 2024 LoveMatch. All rights reserved.</p>
//         </div>
//       </footer>
//     </div>
//   )
// }

// function FeatureCard({ icon, title, description }) {
//   return (
//     <div className="bg-white p-6 rounded-lg shadow-md text-center">
//       <div className="flex justify-center mb-4">{icon}</div>
//       <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
//       <p className="text-gray-600">{description}</p>
//     </div>
//   )
// }
