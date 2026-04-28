// const testimonials = [
//   {
//     name: "Maya R.",
//     title: "Medical Student",
//     quote:
//       "Xmplum turned my lecture slides into structured study guides overnight. My prep time dropped in half.",
//   },
//   {
//     name: "Andrew K.",
//     title: "Corporate Lawyer",
//     quote:
//       "The legal assistant is the only AI that keeps my citations and case context intact.",
//   },
//   {
//     name: "Samira P.",
//     title: "Consultant",
//     quote:
//       "The document-aware chat feels like having a researcher on demand. It is now my daily workflow.",
//   },
// ];

// export default function TestimonialsSection() {
//   return (
//     <section id="testimonials" className="relative scroll-mt-24 py-20">
//       <div className="mx-auto max-w-screen-2xl px-6">
//         <div className="flex flex-col gap-4">
//           <p className="text-sm font-bold uppercase tracking-widest opacity-70">Testimonials</p>
//           <h2 className="font-heading text-3xl font-semibold text-foreground sm:text-4xl">
//             What Users Say
//           </h2>
//         </div>
//         <div className="mt-10 flex gap-6 overflow-x-auto pb-4">
//           {testimonials.map((review) => (
//             <div
//               key={review.name}
//               className="group relative min-w-[300px] flex-1 rounded-3xl border border-border/50 bg-background/95 p-6 shadow-lg shadow-foreground/5 transition duration-300 hover:-translate-y-1 hover:border-foreground/30 hover:shadow-2xl hover:shadow-foreground/10"
//             >
//               <p className="text-lg text-muted-foreground">"{review.quote}"</p>
//               <div className="mt-6">
//                 <p className="font-medium text-foreground">{review.name}</p>
//                 <p className="text-base text-muted-foreground">{review.title}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
