export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden px-4 py-10 md:px-10 md:py-14">
      {/* Banner de prueba para redeploy */}
      <div className="relative z-20 mb-6 mx-auto max-w-6xl">
        <div className="rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 px-6 py-3 text-center shadow-lg">
          <h1 className="text-xl font-bold text-white">Hola desde Next.js 🚀</h1>
        </div>
      </div>
      
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute -top-40 -right-20 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-blue-400/20 via-indigo-400/15 to-purple-400/10 blur-3xl" />
        <div className="absolute -bottom-32 -left-20 h-[450px] w-[450px] rounded-full bg-gradient-to-tr from-violet-400/15 via-purple-300/10 to-fuchsia-300/10 blur-3xl" />
        <div className="absolute right-1/4 top-1/3 h-[300px] w-[300px] rounded-full bg-gradient-to-bl from-cyan-300/12 to-blue-400/8 blur-3xl animate-pulse" style={{animationDuration: '4s'}} />
        <div className="absolute left-1/3 bottom-1/4 h-[250px] w-[250px] rounded-full bg-gradient-to-tr from-indigo-300/10 to-purple-400/8 blur-2xl" />
      </div>
      
      <main className="relative mx-auto grid w-full max-w-6xl gap-6 lg:grid-cols-[1fr_1.25fr] z-10">
        <section className="group relative overflow-hidden rounded-2xl border border-white/60 bg-gradient-to-br from-white/95 via-white/90 to-blue-50/80 p-10 shadow-[0_20px_60px_-15px_rgba(30,64,175,0.25),0_0_0_1px_rgba(255,255,255,0.5)] backdrop-blur-xl">
          <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gradient-to-br from-blue-400/20 to-indigo-400/10 blur-2xl transition-all group-hover:scale-110" />
          <p className="relative inline-flex rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-2 text-xs font-bold tracking-wider text-white uppercase shadow-lg shadow-blue-500/30">
            Convocatoria 2026
          </p>
          <h1 className="relative mt-6 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 bg-clip-text text-4xl font-bold leading-[1.1] text-transparent md:text-5xl lg:text-6xl">
            Formulario de Postulación a Beca
          </h1>
          <p className="relative mt-6 max-w-xl text-base leading-relaxed text-slate-600">
            Completa tus datos académicos y personales para solicitar apoyo
            financiero. Nuestro comité evaluará cada solicitud en función del
            rendimiento, situación socioeconómica y carta de motivación.
          </p>

          <div className="relative mt-10 grid gap-3.5 text-sm text-slate-700 md:grid-cols-2">
            <div className="group relative overflow-hidden rounded-xl border border-blue-200/60 bg-gradient-to-br from-white to-blue-50/30 p-4 font-medium shadow-sm transition-all hover:shadow-md hover:border-blue-300">
              <div className="absolute -right-2 -top-2 h-16 w-16 rounded-full bg-blue-400/10 blur-xl transition-all group-hover:bg-blue-400/20" />
              <div className="relative flex flex-col gap-1">
                <span className="text-xs font-semibold uppercase tracking-wide text-blue-600">Inicio</span>
                <strong className="text-slate-900">15 de marzo</strong>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-xl border border-indigo-200/60 bg-gradient-to-br from-white to-indigo-50/30 p-4 font-medium shadow-sm transition-all hover:shadow-md hover:border-indigo-300">
              <div className="absolute -right-2 -top-2 h-16 w-16 rounded-full bg-indigo-400/10 blur-xl transition-all group-hover:bg-indigo-400/20" />
              <div className="relative flex flex-col gap-1">
                <span className="text-xs font-semibold uppercase tracking-wide text-indigo-600">Cierre</span>
                <strong className="text-slate-900">30 de abril</strong>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-xl border border-purple-200/60 bg-gradient-to-br from-white to-purple-50/30 p-4 font-medium shadow-sm transition-all hover:shadow-md hover:border-purple-300">
              <div className="absolute -right-2 -top-2 h-16 w-16 rounded-full bg-purple-400/10 blur-xl transition-all group-hover:bg-purple-400/20" />
              <div className="relative flex flex-col gap-1">
                <span className="text-xs font-semibold uppercase tracking-wide text-purple-600">Resultado</span>
                <strong className="text-slate-900">20 de mayo</strong>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-xl border border-violet-200/60 bg-gradient-to-br from-white to-violet-50/30 p-4 font-medium shadow-sm transition-all hover:shadow-md hover:border-violet-300">
              <div className="absolute -right-2 -top-2 h-16 w-16 rounded-full bg-violet-400/10 blur-xl transition-all group-hover:bg-violet-400/20" />
              <div className="relative flex flex-col gap-1">
                <span className="text-xs font-semibold uppercase tracking-wide text-violet-600">Modalidad</span>
                <strong className="text-slate-900">Presencial y virtual</strong>
              </div>
            </div>
          </div>
        </section>

        <section className="group relative overflow-hidden rounded-2xl border border-white/60 bg-gradient-to-br from-white via-white to-slate-50/50 p-10 shadow-[0_20px_60px_-15px_rgba(30,64,175,0.2),0_0_0_1px_rgba(255,255,255,0.8)] backdrop-blur-sm">
          <div className="absolute -left-12 -bottom-12 h-40 w-40 rounded-full bg-gradient-to-tr from-indigo-400/10 to-purple-400/5 blur-2xl" />
          <div className="relative">
            <h2 className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-3xl font-bold text-transparent">Datos del estudiante</h2>
            <p className="mt-2.5 text-sm text-slate-500 font-medium">
              Todos los campos marcados son obligatorios.
            </p>
          </div>

          <form className="relative mt-8 grid gap-5 md:grid-cols-2">
            <label className="grid gap-2">
              <span className="text-sm font-semibold text-slate-700">Nombre completo *</span>
              <input className="rounded-lg border border-slate-300 bg-white/80 px-4 py-3 text-slate-900 shadow-sm outline-none transition-all focus:border-blue-500 focus:bg-white focus:shadow-lg focus:shadow-blue-100/50 focus:ring-4 focus:ring-blue-50" type="text" name="nombre" required />
            </label>

            <label className="grid gap-2">
              <span className="text-sm font-semibold text-slate-700">Documento de identidad *</span>
              <input className="rounded-lg border border-slate-300 bg-white/80 px-4 py-3 text-slate-900 shadow-sm outline-none transition-all focus:border-blue-500 focus:bg-white focus:shadow-lg focus:shadow-blue-100/50 focus:ring-4 focus:ring-blue-50" type="text" name="documento" required />
            </label>

            <label className="grid gap-2">
              <span className="text-sm font-semibold text-slate-700">Correo institucional *</span>
              <input className="rounded-lg border border-slate-300 bg-white/80 px-4 py-3 text-slate-900 shadow-sm outline-none transition-all focus:border-blue-500 focus:bg-white focus:shadow-lg focus:shadow-blue-100/50 focus:ring-4 focus:ring-blue-50" type="email" name="correo" required />
            </label>

            <label className="grid gap-2">
              <span className="text-sm font-semibold text-slate-700">Teléfono *</span>
              <input className="rounded-lg border border-slate-300 bg-white/80 px-4 py-3 text-slate-900 shadow-sm outline-none transition-all focus:border-blue-500 focus:bg-white focus:shadow-lg focus:shadow-blue-100/50 focus:ring-4 focus:ring-blue-50" type="tel" name="telefono" required />
            </label>

            <label className="grid gap-2">
              <span className="text-sm font-semibold text-slate-700">Universidad *</span>
              <input className="rounded-lg border border-slate-300 bg-white/80 px-4 py-3 text-slate-900 shadow-sm outline-none transition-all focus:border-blue-500 focus:bg-white focus:shadow-lg focus:shadow-blue-100/50 focus:ring-4 focus:ring-blue-50" type="text" name="universidad" required />
            </label>

            <label className="grid gap-2">
              <span className="text-sm font-semibold text-slate-700">Programa académico *</span>
              <input className="rounded-lg border border-slate-300 bg-white/80 px-4 py-3 text-slate-900 shadow-sm outline-none transition-all focus:border-blue-500 focus:bg-white focus:shadow-lg focus:shadow-blue-100/50 focus:ring-4 focus:ring-blue-50" type="text" name="programa" required />
            </label>

            <label className="grid gap-2">
              <span className="text-sm font-semibold text-slate-700">Semestre actual *</span>
              <input className="rounded-lg border border-slate-300 bg-white/80 px-4 py-3 text-slate-900 shadow-sm outline-none transition-all focus:border-blue-500 focus:bg-white focus:shadow-lg focus:shadow-blue-100/50 focus:ring-4 focus:ring-blue-50" type="number" name="semestre" min={1} max={12} required />
            </label>

            <label className="grid gap-2">
              <span className="text-sm font-semibold text-slate-700">Promedio acumulado (GPA) *</span>
              <input className="rounded-lg border border-slate-300 bg-white/80 px-4 py-3 text-slate-900 shadow-sm outline-none transition-all focus:border-blue-500 focus:bg-white focus:shadow-lg focus:shadow-blue-100/50 focus:ring-4 focus:ring-blue-50" type="number" name="promedio" min={0} max={5} step="0.01" required />
            </label>

            <label className="md:col-span-2 grid gap-2">
              <span className="text-sm font-semibold text-slate-700">Situación socioeconómica *</span>
              <select className="rounded-lg border border-slate-300 bg-white/80 px-4 py-3 text-slate-900 shadow-sm outline-none transition-all focus:border-blue-500 focus:bg-white focus:shadow-lg focus:shadow-blue-100/50 focus:ring-4 focus:ring-blue-50" name="situacion" required>
                <option value="">Selecciona una opción</option>
                <option value="baja">Baja</option>
                <option value="media">Media</option>
                <option value="alta">Alta</option>
              </select>
            </label>

            <label className="md:col-span-2 grid gap-2">
              <span className="text-sm font-semibold text-slate-700">Carta de motivación *</span>
              <textarea className="min-h-40 rounded-lg border border-slate-300 bg-white/80 px-4 py-3 text-slate-900 shadow-sm outline-none transition-all focus:border-blue-500 focus:bg-white focus:shadow-lg focus:shadow-blue-100/50 focus:ring-4 focus:ring-blue-50" name="motivacion" required placeholder="Cuéntanos por qué mereces esta beca y cómo impactará tu formación académica." />
            </label>

            <label className="md:col-span-2 flex items-start gap-3 rounded-lg border border-blue-200/60 bg-gradient-to-r from-blue-50/50 to-indigo-50/30 p-5 text-sm text-slate-700 shadow-sm">
              <input type="checkbox" className="mt-0.5 h-5 w-5 accent-blue-700 rounded" required />
              Declaro que la información suministrada es verídica y autorizo su
              revisión por parte del comité de becas.
            </label>

            <button
              type="submit"
              className="md:col-span-2 mt-3 rounded-xl bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 px-8 py-4 text-base font-bold text-white shadow-[0_10px_40px_-10px_rgba(30,64,175,0.6)] transition-all hover:shadow-[0_20px_50px_-10px_rgba(30,64,175,0.7)] hover:-translate-y-1 hover:scale-[1.02] focus:ring-4 focus:ring-blue-200 focus:outline-none active:scale-[0.98]"
            >
              Enviar postulación
            </button>
          </form>
        </section>
      </main>
    </div>
  );
}
