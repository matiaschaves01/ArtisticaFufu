window.addEventListener("DOMContentLoaded", () => {
  document.addEventListener("click", async (e) => {
    if (e.target.id == "delete-user") {
      await Swal.fire({
        // position: 'top-end',
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1500,
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
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500,
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


