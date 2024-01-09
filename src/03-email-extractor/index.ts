interface User {
  email?: string
  [key: string]: any
}

export function extractEmails(users: User[]): string[] {
  if (users.length == 0) {
    return []
  }

  const emails: string[] = []

  users.forEach((user) => {
    if (user && typeof user.email === 'string') {
      emails.push(user.email)
    }
  })

  // get only the unique emails without duplicates
  const setOfuniqueEmails = new Set(emails)

  const theEmails: string[] = Array.from(setOfuniqueEmails)

  return theEmails
}
