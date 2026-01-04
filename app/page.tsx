import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex items-center justify-center p-8">
      <main className="max-w-4xl w-full">
        <div className="text-center space-y-8">
          {/* Hero Section */}
          <div className="space-y-4">
            <h1 className="text-6xl font-bold text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300">
              Next.js MongoDB Demo
            </h1>
            <p className="text-2xl text-purple-200">
              TypeScript + MongoDB + Repository Pattern
            </p>
            <p className="text-lg text-purple-300 max-w-2xl mx-auto">
              A complete CRUD application with clean architecture, featuring
              database layer, repositories, services, and beautiful UI
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all">
              <div className="text-4xl mb-3">🗄️</div>
              <h3 className="text-xl font-bold text-white mb-2">MongoDB</h3>
              <p className="text-purple-200 text-sm">
                Full database integration with connection pooling
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all">
              <div className="text-4xl mb-3">⚡</div>
              <h3 className="text-xl font-bold text-white mb-2">
                CRUD Operations
              </h3>
              <p className="text-purple-200 text-sm">
                Create, Read, Update, Delete with server actions
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all">
              <div className="text-4xl mb-3">🏗️</div>
              <h3 className="text-xl font-bold text-white mb-2">
                Clean Architecture
              </h3>
              <p className="text-purple-200 text-sm">
                Repository pattern with service layer
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-12">
            <Link
              href="/demo"
              className="inline-block bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white font-bold text-xl px-12 py-4 rounded-full hover:from-pink-600 hover:via-purple-600 hover:to-indigo-600 transition-all shadow-2xl hover:shadow-pink-500/50 hover:scale-105"
            >
              Try Demo →
            </Link>
          </div>

          {/* Tech Stack */}
          <div className="mt-12 bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <h3 className="text-lg font-bold text-white mb-4">Tech Stack</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Next.js 16",
                "TypeScript",
                "MongoDB",
                "Server Actions",
                "Tailwind CSS",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-white/20 rounded-full text-white text-sm font-semibold"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
