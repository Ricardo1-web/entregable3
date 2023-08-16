export const paginationLogic = (currentPage, residents) => {
  if (!residents) {
    return {
      pages: [1],
      residentsInPage: []
    }
  }
  const RESIDENTS_PER_PAGE = 20

  const totalPages = Math.ceil(residents.length / RESIDENTS_PER_PAGE)

  const sliceStart = (currentPage - 1) * RESIDENTS_PER_PAGE
  const sliceEnd = sliceStart + RESIDENTS_PER_PAGE
  const residentsInPage = residents.slice(sliceStart, sliceEnd)

  const pages = []
  for (let i = 1; 1 <= totalPages; i++) {
    pages.push(i)
  }

  return {
    residentsInPage,
    pages
  }
}