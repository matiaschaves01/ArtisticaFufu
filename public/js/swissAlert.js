window.addEventListener("DOMContentLoaded", () => {
  document.addEventListener("click", async (e) => {
    if (e.target.id == "delete-user") {
      await Swal.fire({
        // position: 'top-end',
        title: 'Estas seguro que quieres eliminar el usuario?',
        icon: "success",
        padding: '1rem',
        allowEscapeKey: false
        // showConfirmButton: 'Eliminar'
      });
      await fetch(
        `http://localhost:3007/api/user/delete/${e.target.dataset.id}`,
        {
          method: "delete",
        }
      );
      location.reload();
    }
    if (e.target.id == "delete-product") {
        await Swal.fire({
          // position: 'top-end',
          title: 'Estas seguro que quieres eliminar el producto?',
          icon: "success",
          padding: '1rem',
          allowEscapeKey: false,
          // showConfirmButton: 'Eliminar'
        });
        await fetch(
          `http://localhost:3007/api/products/delete/${e.target.dataset.id}`,
          {
            method: "delete",
          }
        );
        location.reload();
      }
  });
});


