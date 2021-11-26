# Vim Cheat Sheet

## Navigation (or Operations)
Move the cursor to a location in the text:  
`h, j, k, l` : right, down, up, left.   
`w, b, e, ge` : word, previous word, end of word, previous end of word.  
`$, 0` : start of line, end of line.  
`{`, `}` : start of paragraph, end of paragraph.  
`shift {, shift }` or `gg, shift G`: start page, end of page.   
`shift H, shift L`: top of screen, bottom of screen. 
`ctrl d` and `ctrl u`: moves down or up half a screen size. 
`df`: go to file from any file definition (like an import)
`gd`: go to definition from method call or class reference

### Search
`f [char]`: move to char in current line (capital F moves back)  
`t [char]`: move to before char (capital T moves back)  
`/ [chars]`: find the char sequence (click enter to move curser to first occurrence. Click `n` repetedly to go to next occurrence.  
`? [ chars ]`: search backwards.  
`/`: + enter will repeat last search forward.  

## Operations (verbs)
`d`: delete (`D`: delete from cursor to end of line).  
`c`: change (`C`: change to end of line).  
`y`: yank (copy) (`yy` or `Y` to yank a whole line). `"ry`: yang to register: 'r'. ``ctrl-r`` r in insert mode will insert content from register: r.
`s`: substitude (deletes and enter insert mode. Same as `cl`)
`r`: replace. Replaces any char and stays in normal mode (`r <enter>` when sitting on top of a space char, replaces it with new line).

`5s`: deletes 5 chars and enters insert mode.
`v`: visual select (follow by using navigation keys to mark area)
`V`: visual select current line
`p`: paste (character wise, line wise, block wise)   
`"0p`: paste original (when pasting over existing content. p now holds the overwritten string).  
`J`: shift j: will merge the line beneath with current line (from anywhere in the line.)

### Composition
`dt(`: delete untill next (.     
`dd`: delete current line.  
`cc`: change current line.  


## Modifiers (used before nouns to tell how to operate)  
`i`: inside.  
`a`: around.  
`NUM`: number of repetitions.  

## Nouns (objects to work on)  
`w`: word.  
`s`: sentence.  
`p`: paragraph.  
`t`: tag.  
`b`: block of code.

## Composition examples
`20j`: jump down 20 lines
`d2w`: delete 2 words.  
`cis`: change inside sentence.  
`yip`: yank paragraph.  
`ct<`: change untill next bracket.  
`ysiw{`; surround current word with braces (y: you (meaning whatever is selected), s: surround, iw: inner word) 

`vwS<surround char>`: Select word and **surrounds** with the char or brackets. Surround chars can be `[`,`{`,`(`,`'`,`"`,`*`,`#` and backticks`. 
`v3lc()jj<shift>P`: **surround** next 3 chars with parentheses (v:visual select, 3l: 3 places right, c: change, parenthesis (or any other thing to surround with, jj: normal mode, shift P insert behind last char)).  
`viwSb`: viw:select current word, S:surround, b: braces. (Or use any selection and shift S + any type of brackets).   

`r<enter>`: replace current char (eg a space) with a newline

#### replace one line with another multiple times
`yy`: yank current line 
`Vp`: move to next line and visual select it and replace it.  
`V"0p`: move to the next line and visually select it. NOW PASTE FROM register "0 (instead of default unnamed register "") in order to paste what was yanked and not the intermediate overwrites that are stored in default register "" and pasted from with p.  
`.`: Now this can be repeted on other lines. 

