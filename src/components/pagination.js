import React from 'react'
import PropTypes from 'prop-types'
import queryString from 'query-string'
import {range} from 'lodash'

const getParams = (page, tag) => page ? queryString.stringify({page, ...(tag && {tag})}) : null

const Pagination = ({params, count, limit = 10}) => {
    const {page: currentPage = 1, tag} = params

    const totalPages = Math.floor(count / limit)
    const nextPage = currentPage <= totalPages ? currentPage + 1 : null
    const prevPage = currentPage > 1 ? currentPage - 1 : null

    const nextParams = getParams(nextPage, tag)
    const prevParams = getParams(prevPage, tag)

    return (
        <div className="pagination">
            {prevParams
            ? <a className="pagination__nav pagination__nav--previous" href={prevParams}></a>
            : <a className="pagination__nav pagination__nav--previous--disabled"></a>}
            <ul className="pagination__numbers">
                {range(1, totalPages).map(page => {
                    const isCurrent = page === currentPage
                    const itemClass = 'pagination__number' + (isCurrent ? ' pagination__number--current' : '')
                    return (
                        <li key={page} className={itemClass}>
                            {isCurrent ? page : (
                                <a href={getParams(page, tag)}>{page}</a>
                            )}
                        </li>
                    )
                })}
            </ul>
            {nextParams
                ? <a className="pagination__nav pagination__nav--next" href={nextParams}></a>
                : <a className="pagination__nav pagination__nav--next--disabled"></a>}
        </div>
    )
}

Pagination.propTypes = {

}

export default Pagination
