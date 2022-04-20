// import "./Home.scss";
import { NavLink } from 'react-router-dom'
import { Button } from 'reactstrap'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useState } from 'react'

const mapStateToProps = (state) => {
  return {
    data: state.dataProduct,
  }
}

function EditProduct({ data }) {
  const [editData, setEditData] = useState(data.productData[useParams().id])
  return (
    <div className='container'>
      <div className='d-flex-column justify-content'>
        <div className='row'>
          <NavLink to='/'>
            <div className='col-2'>
              <h2>&lt;--</h2>
            </div>
          </NavLink>
          <div className='col-10 text-center'>
            <h2>Edit Product</h2>
          </div>
        </div>
        <div className='text-center mt-5'>
          <svg
            className='bd-placeholder-img rounded-circle'
            width='140'
            height='140'
            xmlns='http://www.w3.org/2000/svg'
            role='img'
            aria-label='Placeholder: 140x140'
            preserveAspectRatio='xMidYMid slice'
            focusable='false'
          >
            <title>Placeholder</title>
            <rect width='100%' height='100%' fill='#777' />
            <text x='50%' y='50%' fill='#777' dy='.3em'>
              140x140
            </text>
          </svg>

          <h2 className='mt-3'>Food Details</h2>
          <div className='mb-3'>
            <label className='form-label'>Name</label>
            <input
              type='text'
              defaultValue={editData.name}
              className='form-control'
            />
          </div>
          <div className='mb-3'>
            <label className='form-label'>Category</label>
            <input
              type='text'
              defaultValue={editData.cat}
              className='form-control'
            />
          </div>
          <div className='mb-3'>
            <label className='form-label'>Description</label>
            <input
              type='text'
              defaultValue={editData.des}
              className='form-control'
            />
          </div>
          <div className='mb-3'>
            <label className='form-label'>Date</label>
            <input
              type='date'
              defaultValue={editData.exp}
              className='form-control'
            />
          </div>
          <div className='mb-3'>
            <label className='form-label'>Time</label>
            <input type='time' className='form-control' />
          </div>
        </div>
        <Button className='w-100' color='warning text-white'>
          Update
        </Button>
      </div>
    </div>
  )
}

export default connect(mapStateToProps)(EditProduct)
