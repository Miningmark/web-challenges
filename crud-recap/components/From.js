import styled from "styled-components";

export default function Form({ onSubmit, formName, defaultData }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    onSubmit(data);
  }

  return (
    <form aria-labelledby={formName} onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input id="name" name="name" type="text" defaultValue={defaultData?.name} required></input>
      <label htmlFor="image-url">Image Url</label>
      <input id="image-url" name="image" type="text" defaultValue={defaultData?.image} required />
      <label htmlFor="location">Location</label>
      <input
        id="location"
        name="location"
        type="text"
        defaultValue={defaultData?.location}
        required
      />
      <label htmlFor="map-url">Map Url</label>
      <input id="map-url" name="mapURL" type="text" defaultValue={defaultData?.mapURL} required />
      <label htmlFor="description">Description</label>
      <textarea
        name="description"
        id="description"
        cols="30"
        rows="10"
        defaultValue={defaultData?.description}
        required
      ></textarea>
      <button type="submit">{defaultData ? "Update place" : "Add place"}</button>
    </form>
  );
}
