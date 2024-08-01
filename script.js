document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.section').forEach(section => {
        section.addEventListener('mouseenter', () => {
            section.querySelector('.hidden-content').style.display = 'block';
        });
        section.addEventListener('mouseleave', () => {
            section.querySelector('.hidden-content').style.display = 'none';
        });
    });
});

const profilePhoto = document.getElementById('profile-photo');
profilePhoto.src = 'C:\Users\VETRIVEL MANI .T\Desktop\muthu\profile-photo.jpg'; // Changes the image source
