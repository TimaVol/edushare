interface Props {
  children: React.ReactNode
  className: string
}

export default function Container({ children, className }: Props) {
  return <div className={`Container ${className}`}>{children}</div>
}
