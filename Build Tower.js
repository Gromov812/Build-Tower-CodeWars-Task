function towerBuilder(num) {

            let resStr = "";
            let n = 0;
            for (let i = 1; i <= num; i++){

                resStr += " ".repeat(num-i);
                resStr += "*".repeat(i + n);
                resStr += " ".repeat(num-i);
                if (!(i == num)) resStr += ",";
                n++
            }
            return resStr.split(",");
        }
