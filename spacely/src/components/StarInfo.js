import { useState, useEffect, useRef } from "react";
import StarService from "../services/star.service";
import "../pages/home/home.css"
import Modal from "react-modal";


function StarList() {
  const [stars, setStars] = useState([]);
  const [selectedStar, setSelectedStar] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const refForm = useRef();

  const getAllStars = () => {
    StarService.getAllStars()
      .then((items) => {
        let allStars = [];
        items.forEach((item) => {
          const key = item.key;
          const data = item.val();
          allStars.push({
            key: key,
            galaxy: data.galaxy,
            discoveryDate: data.discoveryDate,
            imageUrl: data.imageUrl,
            name: data.name
          });
        });

        setStars([...allStars]);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const removeStar = (key) => {
    StarService.removeStar(key).then((res) => {
      getAllStars();
    });
  };


  const addStar = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const name = formData.get("name");
    const discoveryDate = formData.get("discoveryDate");
    const imageFile = formData.get("imageUrl");
    const galaxy = formData.get("galaxy");

    const reader = new FileReader();
    reader.readAsDataURL(imageFile);
    reader.onload = () => {
      const imageUrl = reader.result;

      StarService.addStar(name, discoveryDate, imageUrl, galaxy).then((res) => {
        refForm.current.reset();
        setStars((oldValues) => [
          ...oldValues,
          { key: res.key, name, discoveryDate, imageUrl, galaxy }
        ]);
      });
    };
  };

  const openModal = (star) => {
    setSelectedStar(star);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const handleModifyStar = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const name = formData.get("name");
    const discoveryDate = formData.get("discoveryDate");
    const imageFile = formData.get("imageUrl");
    const galaxy = formData.get("galaxy");

    const reader = new FileReader();
    reader.readAsDataURL(imageFile);
    reader.onload = () => {
      const imageUrl = reader.result;

      StarService.modifyStar(selectedStar.key, {
        name,
        discoveryDate,
        imageUrl,
        galaxy
      }).then((res) => {
        closeModal();
        getAllStars();
      });
    };
  };

  useEffect(() => {
    getAllStars();
  }, []);

  return (
    <div class="box">
      <div>
        <form onSubmit={addStar} ref={refForm}>
          <input className="rounded-input" type="text" name="name" placeholder="Name" />
          <input className="rounded-input" type="text" name="discoveryDate" placeholder="Discovery date" />
          <input className="rounded-input" type="text" name="galaxy" placeholder="Galaxy" />
          <input className="rounded-input" type="file" name="imageUrl" placeholder="Image URL" />
          <input className="rounded-input" type="submit" value="Add Star" />
        </form>
      </div>


      <div class="stars-container">
        {stars.map(star => (
          <>
            <div class="fotoEstrella"><img class="fotos" src={star.imageUrl} alt={star.name} /></div>
            <div key={star.key} >
              <h2>{star.name}</h2>
              <p>Discovered on: {star.discoveryDate}</p>
              <p>Galaxy: {star.galaxy}</p>
              <img src="https://cdn-icons-png.flaticon.com/512/860/860829.png" alt="delete" width={20} onClick={() => removeStar(star.key)} />
              <img src="https://cdn.icon-icons.com/icons2/1897/PNG/512/pencil_120892.png" alt="modify" width={20} onClick={() => openModal(star)} />

              <Modal className="custom-modal" style={{
                overlay: { backgroundColor: "#cbdbff" }
              }} isOpen={isModalOpen} onRequestClose={closeModal} contentLabel="Modify Star Modal">
                {selectedStar && (
                  <form class="modify-container" onSubmit={handleModifyStar}>
                    <img class="modify-icons" src="https://cdn-icons-png.flaticon.com/512/6367/6367676.png" alt="back" width={20} onClick={closeModal} />
                    <input
                      className="modify-input"
                      type="text"
                      name="name"
                      placeholder="Name"
                      defaultValue={selectedStar.name}
                    />
                    <input
                      className="modify-input"
                      type="text"
                      name="discoveryDate"
                      placeholder="Discovery date"
                      defaultValue={selectedStar.discoveryDate}
                    />
                    <input
                      className="modify-input"
                      type="text"
                      name="galaxy"
                      placeholder="Galaxy"
                      defaultValue={selectedStar.galaxy}
                    />
                    <input
                      class="modify-photo-input"
                      type="file"
                      name="imageUrl"
                      placeholder="Image URL"
                    />
                    <input type="image" className="modify-icons" src="https://www.pngplay.com/wp-content/uploads/12/Check-Mark-Tick-PNG-Free-File-Download.png"
                      alt="confirm" width={20} value="Save Changes"
                    />
                  </form>
                )}
              </Modal>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}

export default StarList;
