import * as React from "react"

const ProtectedBuy = (props) => (
  <svg
    width={60}
    height={22}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M8.49 1.23 3.5 3.11c-1.15.43-2.09 1.79-2.09 3.01v7.43c0 1.18.78 2.73 1.73 3.44l4.3 3.21c1.41 1.06 3.73 1.06 5.14 0l4.3-3.21c.95-.71 1.73-2.26 1.73-3.44V6.12c0-1.23-.94-2.59-2.09-3.02l-4.99-1.87c-.85-.31-2.21-.31-3.04 0Z"
      stroke="#000"
      strokeWidth={1.15}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default ProtectedBuy
