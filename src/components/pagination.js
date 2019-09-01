import React from 'react'
import { Link } from 'gatsby'
import queryString from 'query-string'
import { range } from 'lodash'

const getParams = (page, tag) => page ? queryString.stringify({ page, ...(tag && { tag }) }) : null

const Pagination = ({ params, count, limit = 10 }) => {
    const { page: currentPage = 0, tag } = params

    const totalPages = Math.floor(count / limit)
    const nextPage = currentPage < totalPages ? currentPage + 1 : null
    const prevPage = currentPage >= 1 ? currentPage - 1 : null

    const nextParams = getParams(nextPage, tag)
    const prevParams = getParams(prevPage, tag)

    return (
        <div className="pagination">
            {prevParams
                ? <Link className="pagination__nav pagination__nav--previous" to={prevParams}></Link>
                : <span className="pagination__nav pagination__nav--previous--disabled"></span>}
            <ul className="pagination__numbers">
                {range(0, totalPages || 1).map(page => {
                    const isCurrent = page == currentPage
                    const itemClass = 'pagination__number' + (isCurrent ? ' pagination__number--current' : '')
                    return (
                        <li key={page} className={itemClass}>
                            {isCurrent ? page + 1 : (
                                <Link to={getParams(page, tag)}>{page + 1}</Link>
                            )}
                        </li>
                    )
                })}
            </ul>
            {nextParams
                ? <Link className="pagination__nav pagination__nav--next" to={nextParams}></Link>
                : <span className="pagination__nav pagination__nav--next--disabled"></span>}
        </div>
    )
}

Pagination.propTypes = {

}

export default Pagination
