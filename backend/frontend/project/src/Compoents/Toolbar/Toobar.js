import React from 'react'
import './ToolBar.css'

function Toobar() {
    return (
        <div class="btn-toolbar mx-auto w-25 mt-5 " role="toolbar" aria-label="Toolbar with button groups">
            <div class="btn-group me-2" role="group" aria-label="First group">
                <button type="button" class="btn border active">1</button>
            </div>
            <div class="btn-group me-2" role="group" aria-label="Second group">
                <button type="button" class="btn border">2</button>
                <button type="button" class="btn border">3</button>
                <button type="button" class="btn border">4</button>
            </div>
            <div class="btn-group" role="group" aria-label="Third group">
                <button type="button" class="btn border">5</button>
            </div>
        </div>)
}

export default Toobar