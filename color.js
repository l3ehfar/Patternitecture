function colored() {
  stroke(z1);
  switch (n) {
    case 6:
      stroke(z);
      if (z <= 60) {
        z += 0.1;
      } else if (z >= 60) {
        stroke(z0);
        if (z0 >= 10) {
          z0 -= 0.1;
        } else if (z0 <= 10) {
          n = 12;
          z = 10;
          z0 = 60;
        }
      }
      break;

    case 12:
      stroke(z1);
      if (z1 <= 60) {
        z1 += 0.1;
      } else if (z1 >= 60) {
        stroke(z2);
        if (z2 >= 10) {
          z2 -= 0.1;
        } else if (z2 <= 10) {
          n = 24;
          z1 = 10;
          z2 = 60;
        }
      }
      break;
    case 24:
      stroke(z3);
      if (z3 <= 60) {
        z3 += 0.1;
      } else if (z3 >= 60) {
        stroke(z4);
        if (z4 >= 10) {
          z4 -= 0.1;
        } else if (z4 <= 10) {
          n = 36;
          z3 = 10;
          z4 = 60;
        }
      }
      break;
    case 36:
      stroke(z5);
      if (z5 <= 60) {
        z5 += 0.1;
      } else if (z5 >= 60) {
        stroke(z6);
        if (z6 >= 10) {
          z6 -= 0.1;
        } else if (z6 <= 10) {
          n = 6;
          z6 = 60;
          z5 = 10;
        }
      }
      break;
  }
}
