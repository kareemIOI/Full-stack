import React from 'react'

export default function Classes() {
    return (
        <div className='Classes'>
            <div className='adduser-form'>
                <h4>Add New Class Schedule</h4>
                <form className='adduser-form p-3 '>
                    <div className='admian-add-inputs-container d-flex flex-wrap gap-3 mb-3'>
                        <div className='input-container  d-flex flex-column gap-2'>
                            <label className='d-block text-black-50 fs-6'>Course Title</label>
                            <input type="text" className='p-2' />
                        </div>
                        <div className='input-container  d-flex flex-column gap-2'>
                            <label className='d-block text-black-50 fs-6'>Course price</label>
                            <input type="number" className='p-2' />
                        </div>
                        <div className='input-container  d-flex flex-column gap-2'>
                            <label className='d-block text-black-50 fs-6'>Course Hours</label>
                            <input type="text" className='p-2' />
                        </div>
                        <div className='input-container  d-flex flex-column gap-2'>
                            <label className='d-block text-black-50 fs-6'>Classes Number</label>
                            <input type="number" className='p-2' />
                        </div>
                        <div className='input-container  d-flex flex-column gap-2'>
                            <label className='d-block text-black-50 fs-6'>Teaher Name</label>
                            <input type="text" className='p-2' />
                        </div>
                        <div className='input-container  d-flex flex-column gap-2'>
                            <label className='d-block text-black-50 fs-6'>Course Description</label>
                            <textarea type="text" className='p-2'></textarea>
                        </div>
                    </div>
                    <button className=''>Save</button>
                    <button className=''>Reset</button>
                </form>
            </div>
            <div className='allClasses'>
                <div className='classes-datagrid'>
                </div>
            </div>
        </div>
    )
}
