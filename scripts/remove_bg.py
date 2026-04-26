from PIL import Image, ImageFilter

def make_transparent_smooth(input_path, output_path, threshold=240, feather_amount=2):
    # Open image and ensure it's in RGBA
    img = Image.open(input_path).convert("RGBA")
    
    # Create a mask: white pixels will be transparent (0), others opaque (255)
    # We use a grayscale mask for better control
    datas = img.getdata()
    
    new_alpha = []
    for item in datas:
        # Calculate "whiteness" - how close is it to 255,255,255
        whiteness = (item[0] + item[1] + item[2]) / 3
        
        if whiteness > threshold:
            # Scale alpha based on whiteness for a soft edge
            # If whiteness is 255, alpha is 0. If it's at threshold, alpha is 255.
            alpha = int(255 * (1 - (whiteness - threshold) / (255 - threshold)))
            new_alpha.append(max(0, alpha))
        else:
            new_alpha.append(255)
            
    # Create the alpha channel image
    alpha_mask = Image.new("L", img.size)
    alpha_mask.putdata(new_alpha)
    
    # Smooth the mask to remove jagged edges (feathering)
    alpha_mask = alpha_mask.filter(ImageFilter.GaussianBlur(radius=feather_amount))
    
    # Put the smoothed mask back into the image
    img.putalpha(alpha_mask)
    
    # Crop the image to remove unnecessary whitespace around the logo
    # This makes positioning much easier
    bbox = img.getbbox()
    if bbox:
        img = img.crop(bbox)
        
    img.save(output_path, "PNG")
    print(f"Created smooth transparent logo at: {output_path}")

if __name__ == "__main__":
    make_transparent_smooth(
        "public/logos/bsg/logo-business-solution-group.png", 
        "public/logos/bsg/logo-bsg-smooth.png",
        threshold=240,
        feather_amount=1
    )
