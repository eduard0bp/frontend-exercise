import * as React from 'react'
import { ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-react'
import { cn } from '@/lib/utils'
import { ButtonProps, buttonVariants } from '@/components/ui/Button/Button'

const Pagination = ({ className, ...props }: React.ComponentProps<'nav'>) => (
  <nav
    role="navigation"
    aria-label="pagination"
    className={cn('mx-auto flex w-full justify-center', className)}
    {...props}
  />
)
Pagination.displayName = 'Pagination'

const PaginationContent = React.forwardRef<
  HTMLUListElement,
  React.ComponentProps<'ul'>
>(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    className={cn('flex flex-row items-center gap-1', className)}
    {...props}
  />
))
PaginationContent.displayName = 'PaginationContent'

const PaginationItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentProps<'li'>
>(({ className, ...props }, ref) => (
  <li ref={ref} className={cn('', className)} {...props} />
))
PaginationItem.displayName = 'PaginationItem'

type PaginationLinkProps = {
  isActive?: boolean
} & Pick<ButtonProps, 'size'> &
  React.ComponentProps<'a'>

const PaginationLink = ({
  className,
  isActive,
  disabled,
  size = 'icon',
  ...props
}: PaginationLinkProps & { disabled?: boolean }) => (
  <a
    aria-current={isActive ? 'page' : undefined}
    className={cn(
      buttonVariants({
        variant: isActive ? 'outline' : 'ghost',
        size
      }),
      { 'cursor-not-allowed': disabled },
      className
    )}
    onClick={e => {
      if (disabled) {
        e.preventDefault()
      }
    }}
    {...props}
  />
)

PaginationLink.displayName = 'PaginationLink'

const PaginationButton = ({
  onClick,
  disabled,
  children
}: {
  onClick: () => void
  disabled?: boolean
  children: React.ReactNode
}) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={`${
      disabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-200'
    } inline-flex items-center justify-center p-2 mx-1 transition-colors duration-200 ease-in-out`}
  >
    {children}
  </button>
)
PaginationButton.displayName = 'PaginationButton'

const PaginationPrevious = ({
  disabled,
  onClick
}: {
  disabled: boolean
  onClick: () => void
}) => (
  <PaginationButton onClick={onClick} disabled={disabled}>
    <ChevronLeft className="h-4 w-4" />
    <span>Anterior</span>
  </PaginationButton>
)
PaginationPrevious.displayName = 'PaginationPrevious'
const PaginationNext = ({
  disabled,
  onClick
}: {
  disabled: boolean
  onClick: () => void
}) => (
  <PaginationButton onClick={onClick} disabled={disabled}>
    <span>Próximo</span>
    <ChevronRight className="h-4 w-4" />
  </PaginationButton>
)
PaginationNext.displayName = 'PaginationNext'

const PaginationEllipsis = ({
  className,
  ...props
}: React.ComponentProps<'span'>) => (
  <span
    aria-hidden
    className={cn('flex h-9 w-9 items-center justify-center', className)}
    {...props}
  >
    <MoreHorizontal className="h-4 w-4" />
    <span className="sr-only">More pages</span>
  </span>
)
PaginationEllipsis.displayName = 'PaginationEllipsis'

const PaginationNumbers = ({
  currentPage,
  totalPages,
  onPageChange
}: {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}) => {
  const pageNumbers = []
  const delta = 2

  for (let i = 1; i <= totalPages; i++) {
    if (
      i === 1 ||
      i === totalPages ||
      (i >= currentPage - delta && i <= currentPage + delta)
    ) {
      pageNumbers.push(
        <PaginationItem
          key={i}
          className="cursor-pointer"
          onClick={() => onPageChange(i)}
        >
          <PaginationLink isActive={i === currentPage}>{i}</PaginationLink>
        </PaginationItem>
      )
    } else if (i === currentPage - delta - 1 || i === currentPage + delta + 1) {
      pageNumbers.push(<PaginationEllipsis key={i} />)
    }
  }

  return <>{pageNumbers}</>
}

PaginationNumbers.displayName = 'PaginationNumbers'

export {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  PaginationNumbers
}
