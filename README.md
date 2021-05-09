## cipher CLI tool

# To install this app you must:

-   download it from the repository;
-   run the command line and go to the directoty of app
-   run npm i (or install)

# CLI tool should accept 4 options (short alias and full name):

    -s, --shift: a shift
    -i, --input: an input file
    -o, --output: an output file
    -a, --action: an action encode/decode

# Cross Check

**Usage example:**

1. _-a (--action)_ is **encode**

```bash
$ node my_caesar_cli -a encode -s 7 -i "./input.txt" -o "./output.txt"
```

> input.txt
> `This is secret. Message about "_" symbol!`

> output.txt
> `Aopz pz zljyla. Tlzzhnl hivba "_" zftivs!`

```bash
$ node my_caesar_cli --action encode --shift 7 --input plain.txt --output encoded.txt
```

> plain.txt
> `This is secret. Message about "_" symbol!`

> encoded.txt
> `Aopz pz zljyla. Tlzzhnl hivba "_" zftivs!`

2. _-a (--action)_ is **decode**
   _Decoding encoded initial string with the same -s(--shift) number produces the initial string._

```bash
$ node my_caesar_cli --action decode --shift 7 --input encoded.txt --output plain.txt
```

> encoded.txt
> `Aopz pz zljyla. Tlzzhnl hivba "_" zftivs!`

> plain.txt
> `This is secret. Message about "_" symbol!`

3. _(Optional) Negative shift handling_

```bash
$ node my_caesar_cli --action encode --shift -1 --input plain.txt --output encoded.txt
```

> plain.txt
> `This is secret. Message about "_" symbol!`

> encoded.txt
> `Sghr hr rdbqds. Ldrrzfd zants "_" rxlank!`

**Other example:**

4. Changing the order of arguments

```bash
$ node my_caesar_cli --input input.txt --output output.txt --action encode --shift -1
```

5. Input and/or output file is missed

```bash
$ node my_caesar_cli --output output.txt --action encode --shift 20800
$ node my_caesar_cli --input input.txt --action encode --shift 20800
$ node my_caesar_cli --action encode --shift 20800
```

6. Input and/or output file does not exist or is not accessable, or not a file

```bash
$ node my_caesar_cli --input plain.txt --output output.txt --action encode --shift -1
$ node my_caesar_cli --input input.txt --output encoded.txt --action encode --shift -1
$ node my_caesar_cli --input src --output output.txt --action encode --shift -1
$ node my_caesar_cli --input input.txt --output ./src/output-only-read.txt --action encode --shift -1
```

7.  Action (encode/decode) or/and the shift is missed

```bash
$ node my_caesar_cli -s 7 -i "./input.txt" -o "./output.txt"
$ node my_caesar_cli -a encode -i "./input.txt" -o "./output.txt"
```

8. The shift is not a number

```bash
$ node my_caesar_cli --action encode --shift number --input input.txt --output output.txt
$ node my_caesar_cli --action encode --shift NaN --input input.txt --output output.txt
$ node my_caesar_cli --action encode --shift '77' --input input.txt --output output.txt
```

9. The action is not "encode" or "decode"

```bash
$ node my_caesar_cli --action gggg --shift 0 --input input.txt --output output.txt
```
