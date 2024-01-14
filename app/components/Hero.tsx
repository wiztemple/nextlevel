

export default function Hero({
  children,
  className,
}: {
  children: React.ReactNode,
  className: string,
}) {
  return (
      <div className={`w-full ${className})]`}>
         {children}
      </div>
  )
}
