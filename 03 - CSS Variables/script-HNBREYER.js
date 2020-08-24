    const inputs = document.querySelectorAll('.controls input');

    function handleUpdate(){
      const suffix = this.dataset.sizing || ''; //spacing and blur have sizing, colour doesn't; || avoids the undefined
      document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
    }

    inputs.forEach(input => input.addEventListener('change', handleUpdate));
    inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
