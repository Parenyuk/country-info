
export const themeColor = (theme: any) =>  {
  return { color: theme === "light" ? '#222' : 'white' }
}

export const themeColorAndBackColor = (theme: any) =>  {
  return { backgroundColor: theme === "light" ? 'white' : '#222', color: theme === "light" ? '#222' : 'white' }
}

export const themeHeader = (theme: any) =>  {
  return { backgroundColor: theme === "light" ? 'white' : '#222',
    color: theme === "light" ? '#222' : 'white',
    boxShadow: theme === "light" && '0 4px 6px rgba(0, 0, 0, 0.1)' }
}
