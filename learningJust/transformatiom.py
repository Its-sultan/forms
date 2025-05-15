# Adjusting the text to avoid special characters
pdf = FPDF()
pdf.set_auto_page_break(auto=True, margin=15)
pdf.add_page()
pdf.set_font("Arial", size=12)

# Title
pdf.set_font("Arial", size=14, style="B")
pdf.cell(200, 10, "2D Transformations in Computer Graphics", ln=True, align="C")
pdf.ln(10)

# Section 1: Translation
pdf.set_font("Arial", size=12)
pdf.cell(200, 10, "1. Translation", ln=True, align="L")
pdf.multi_cell(0, 10, (
    "Translation moves an object from one location to another in the 2D plane "
    "by adding a constant offset to its x- and y-coordinates.\n\n"
    "Mathematical Representation:\n"
    "  x' = x + T_x\n"
    "  y' = y + T_y\n\n"
    "Matrix Form:\n"
    "  [x']   [1  0  T_x] [x]\n"
    "  [y'] = [0  1  T_y] [y]\n"
    "  [1 ]   [0  0   1 ] [1]\n\n"
    "Graphical Representation:\n"
    "The object is shifted horizontally and vertically by the translation values (T_x, T_y)."
))

# Section 2: Scaling
pdf.add_page()
pdf.cell(200, 10, "2. Scaling", ln=True, align="L")
pdf.multi_cell(0, 10, (
    "Scaling changes the size of an object. Uniform scaling keeps proportions intact, "
    "while non-uniform scaling changes the dimensions independently along the x- and y-axes.\n\n"
    "Mathematical Representation:\n"
    "  x' = x * S_x\n"
    "  y' = y * S_y\n\n"
    "Matrix Form:\n"
    "  [x']   [S_x  0   0] [x]\n"
    "  [y'] = [ 0  S_y  0] [y]\n"
    "  [1 ]   [ 0   0   1] [1]\n\n"
    "Graphical Representation:\n"
    "The object is resized along the x- and y-axes by scaling factors (S_x, S_y)."
))

# Section 3: Rotation
pdf.add_page()
pdf.cell(200, 10, "3. Rotation", ln=True, align="L")
pdf.multi_cell(0, 10, (
    "Rotation pivots an object around a point (typically the origin) by a specified angle theta.\n\n"
    "Mathematical Representation:\n"
    "  x' = x * cos(theta) - y * sin(theta)\n"
    "  y' = x * sin(theta) + y * cos(theta)\n\n"
    "Matrix Form:\n"
    "  [x']   [cos(theta)  -sin(theta)   0] [x]\n"
    "  [y'] = [sin(theta)   cos(theta)   0] [y]\n"
    "  [1 ]   [     0            0      1] [1]\n\n"
    "Graphical Representation:\n"
    "The object is rotated counterclockwise by the angle theta."
))

# Save the PDF
file_path = "/mnt/data/2D_Transformations.pdf"
pdf.output(file_path)
file_path
