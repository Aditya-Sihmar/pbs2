# pbs2
portrait building software using criminal data-set. This software takes in blurry or distorted images from CCTV cameras and rebuilds those photographs into potraits so that criminals can be identified on the crime scene. It gives you two ways to identify a criminal.
1. There is some digital media of the crime scene with the criminal such as CCTV footage or any photograph. It takes the blurry images and remove the noise and then GAN will recreate the image to fill up the details.
2. If there is no digital media, then the user can create a potrait based on the description of the criminals given by eye victims and if there is any record of that criminal in the criminal database then the software will pull out the orignal photograph of the criminal using face recognition algorithm with triplet loss.

### How to use "creating_test_images.py" script
1. copy the file to any location other than this git repo
2. In the same folder where you saved the script create a folder named "original"
3. Populate the folder "original" with the images you want to distort
4. Run the script "creating_test_images.py"
5. A new folder named "distorted" would be created with all the new images
