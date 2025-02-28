
import Pagination from 'react-bootstrap/Pagination'

import '../../../assets/styles/paginationProducts.scss'

const PaginationProducts = ({ currentPage, totalPages, onPageChange, admin=false }) => {
    
  const scrollToTop = () => { window.scrollTo(0, 0) }

  const handleClick = (page) => {
      onPageChange(page);
      if(!admin) scrollToTop();
  }

  const getPaginationItems = () => {
    const items = [];
  
    if (totalPages <= 7) {
      // Mostrar todas las páginas si son 7 o menos
      for (let page = 1; page <= totalPages; page++) {
        items.push(
          <Pagination.Item key={page} active={page === currentPage} onClick={() => handleClick(page)}>
            {page}
          </Pagination.Item>
        );
      }
    } else {
      // Siempre mostrar la primera página
      items.push(
        <Pagination.Item key={1} active={currentPage === 1} onClick={() => handleClick(1)}>
          1
        </Pagination.Item>
      );
  
      // Mostrar puntos suspensivos si currentPage > 4
      if (currentPage > 4) {
        items.push(<Pagination.Ellipsis key="start-ellipsis" disabled />);
      }
  
      // Mostrar las páginas cercanas a la actual
      const startPage = Math.max(2, currentPage - 1);
      const endPage = Math.min(totalPages - 1, currentPage + 1);
  
      for (let page = startPage; page <= endPage; page++) {
        items.push(
          <Pagination.Item key={page} active={page === currentPage} onClick={() => handleClick(page)}>
            {page}
          </Pagination.Item>
        );
      }
  
      // Mostrar puntos suspensivos si currentPage está lejos de las últimas páginas
      if (currentPage < totalPages - 3) {
        items.push(<Pagination.Ellipsis key="end-ellipsis" disabled />);
      }
  
      // Siempre mostrar la última página
      items.push(
        <Pagination.Item key={totalPages} active={currentPage === totalPages} onClick={() => handleClick(totalPages)}>
          {totalPages}
        </Pagination.Item>
      );
    }
  
    return items;
  };
  
    return (
      <Pagination className='custom-pagination'>
        <Pagination.Prev onClick={() => handleClick(currentPage - 1)} disabled={currentPage === 1} />
            {getPaginationItems()}
        <Pagination.Next onClick={() => handleClick(currentPage + 1)} disabled={currentPage === totalPages} />
      </Pagination>
    )
  }
  
  export default PaginationProducts