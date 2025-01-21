export default function Home() {
  return (
    <div className="min-h-screen p-8 max-w-4xl mx-auto font-[family-name:var(--font-geist-sans)]">
      <main className="space-y-12">
        <header className="space-y-4">
          <h1 className="text-4xl font-bold">My Personal Blog</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Welcome to my corner of the internet where I share my thoughts on technology, programming, and life
          </p>
        </header>

        <section className="space-y-8">
          <article className="space-y-4">
            <h2 className="text-2xl font-semibold hover:text-gray-600 dark:hover:text-gray-300">
              <a href="/blog/getting-started">Getting Started with Next.js 14</a>
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Learn how to build modern web applications with Next.js 14 and its powerful features including server components, app router, and more.
            </p>
            <div className="flex gap-4 text-sm text-gray-500">
              <span>January 21, 2025</span>
              <span>5 min read</span>
              <span>#nextjs #webdev</span>
            </div>
          </article>

          <article className="space-y-4">
            <h2 className="text-2xl font-semibold hover:text-gray-600 dark:hover:text-gray-300">
              <a href="/blog/tailwind-tips">Essential Tailwind CSS Tips and Tricks</a>
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Discover practical tips and tricks to make the most out of Tailwind CSS in your projects. Learn about best practices and common pitfalls.
            </p>
            <div className="flex gap-4 text-sm text-gray-500">
              <span>November 28, 2023</span>
              <span>4 min read</span>
              <span>#css #tailwind</span>
            </div>
          </article>
        </section>
      </main>

      <footer className="mt-16 py-8 border-t border-gray-200 dark:border-gray-800">
        <div className="flex justify-between items-center">
          <div className="text-sm text-gray-600 dark:text-gray-400">
            © 2023 My Personal Blog
          </div>
          <div className="flex gap-6">
            <a href="https://twitter.com" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100">
              Twitter
            </a>
            <a href="https://github.com" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100">
              GitHub
            </a>
            <a href="/rss" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100">
              RSS
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
