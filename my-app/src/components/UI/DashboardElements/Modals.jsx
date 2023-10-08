import React from 'react'

export const Modals = (props) => {
    const {data, onImageChosen, sendDataToApi, updateElementData, dismiss,deletData} = props;
  return (
    <>
    <div
        id="editCardModal"
        className="modal fade"
        style={{ zIndex: "9999" }}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <form onSubmit={sendDataToApi} id="myAddForm">
              <div className="modal-header">
                <h4 className="modal-title">Edit Card</h4>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-hidden="true"
                >
                  &times;
                </button>
              </div>

              <div className="modal-body">
                <div className="form-group">
                  <label>Image</label>
                  <input
                    type="file"
                    id="imageInput"
                    className="form-control"
                    
                    onChange={onImageChosen}
                  />
                </div>
                <div className="form-group">
                  <label>Flag</label>
                  <input
                    type="file"
                    id="flagInput"
                    className="form-control"
                    
                    onChange={onImageChosen}
                  />
                </div>
                <div className="form-group">
                  <label>Ends in? </label>
                  <input
                    type="number"
                    name="endsIn"
                    className="form-control"
                    required
                    value={data.endsIn}
                    onChange={updateElementData}
                  />
                </div>
                <div className="form-group">
                  <label>How many people going so far? </label>
                  <input
                    type="number"
                    name="peopleGoing"
                    className="form-control"
                    required
                    value={data.peopleGoing}
                    onChange={updateElementData}
                  />
                </div>
                <div className="form-group">
                  <label>City Name</label>
                  <input
                    type="text"
                    name="cityName"
                    className="form-control"
                    required
                    value={data.cityName}
                    onChange={updateElementData}
                  />
                </div>
                <div className="form-group">
                  <label>Location</label>
                  <input
                    type="text"
                    name="location"
                    className="form-control"
                    required
                    value={data.location}
                    onChange={updateElementData}
                  />
                </div>
                <div className="form-group">
                  <label>Package Sale</label>
                  <input
                    type="number"
                    name="packageSale"
                    className="form-control"
                    required
                    value={data.packageSale}
                    onChange={updateElementData}
                  />
                </div>
                <div className="form-group">
                  <label>Package Price</label>
                  <input
                    type="number"
                    name="packagePrice"
                    className="form-control"
                    required
                    value={data.packagePrice}
                    onChange={updateElementData}
                  />
                </div>
              </div>

              <div className="modal-footer">
                <input
                  type="button"
                  className="btn btn-default"
                  data-dismiss="modal"
                  value="Cancel"
                  ref={dismiss}
                />
                <button
                  className="btn btn-sucess"
                  id="myDismissButton"
                  type="submit"
                >
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* <!-- Delete Modal HTML --> */}
      <div
        id="deleteCardModal"
        className="modal fade"
        style={{ zIndex: "9999" }}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <form>
              <div className="modal-header">
                <h4 className="modal-title">Delete Employee</h4>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-hidden="true"
                >
                  &times;
                </button>
              </div>
              <div className="modal-body">
                <p>Are you sure you want to delete these Records?</p>
                <p className="text-warning">
                  <small>This action cannot be undone.</small>
                </p>
              </div>
              <div className="modal-footer">
                <input
                  type="button"
                  className="btn btn-default"
                  data-dismiss="modal"
                  value="Cancel"
                />
                <input
                  type="submit"
                  className="btn btn-danger"
                  value="Delete"
                  onClick={deletData}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
export default Modals;
