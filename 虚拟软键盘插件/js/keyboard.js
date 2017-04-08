(function($){
jQuery.fn.keyboard = function(options){
	options = $.extend({
		lang:'en'
	}, options);
	var make = function(){
		var keyboard='\
		<div class="keyboard_close"></div>\
		<div class="keyboard_norm keyboard_type ru">\
			<table class="keyboard_row">\
				<tr>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">ё</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">1</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">2</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">3</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">4</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">5</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">6</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">7</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">8</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">9</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">0</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">-</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">=</span></span></td>\
					<td><span class="keyboard_key backspace"><span class="keyboard_key-m">←</span></span></td>\
				</tr>\
			</table>\
			<table class="keyboard_row">\
				<tr>\
					<td><span class="keyboard_key atmark"><span class="keyboard_key-m">@</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">й</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">ц</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">у</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">к</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">е</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">н</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">г</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">ш</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">щ</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">з</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">х</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">ъ</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">\\</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">«</span></span></td>\
				</tr>\
			</table>\
			<table class="keyboard_row">\
				<tr>\
					<td><span class="keyboard_key capslock"><span class="keyboard_key-m"><img src="img/capslock.png" alt="capslock"/></span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">ф</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">ы</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">в</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">а</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">п</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">р</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">о</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">л</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">д</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">ж</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">э</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">!</span></span></td>\
					<td><span class="keyboard_key enter"><span class="keyboard_key-m"><img src="img/enter.png" alt="enter"/></span></span></td>\
				</tr>\
			</table>\
			<table class="keyboard_row">\
				<tr>\
					<td><span class="keyboard_key lshift"><span class="keyboard_key-m"><img src="img/shift.png" alt="shift"/></span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">я</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">ч</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">с</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">м</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">и</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">т</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">ь</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">б</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">ю</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">,</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">.</span></span></td>\
					<td><span class="keyboard_key rshift"><span class="keyboard_key-m"><img src="img/shift.png" alt="shift"/></span></span></td>\
				</tr>\
			</table>\
		</div>\
		<div class="keyboard_caps keyboard_type ru">\
			<table class="keyboard_row">\
				<tr>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">Ё</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">!</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">@</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">№</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">$</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">%</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">?</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">&</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">*</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">(</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">)</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">_</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">+</span></span></td>\
					<td><span class="keyboard_key backspace"><span class="keyboard_key-m">←</span></span></td>\
				</tr>\
			</table>\
			<table class="keyboard_row">\
				<tr>\
					<td><span class="keyboard_key atmark"><span class="keyboard_key-m">@</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">Й</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">Ц</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">У</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">К</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">Е</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">Н</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">Г</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">Ш</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">Щ</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">З</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">Х</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">Ъ</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">/</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">»</span></span></td>\
				</tr>\
			</table>\
			<table class="keyboard_row">\
				<tr>\
					<td><span class="keyboard_key capslock"><span class="keyboard_key-m"><img src="img/capslock.png" alt="capslock"/></span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">Ф</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">Ы</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">В</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">А</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">П</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">Р</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">О</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">Л</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">Д</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">Ж</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">Э</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">?</span></span></td>\
					<td><span class="keyboard_key enter"><span class="keyboard_key-m"><img src="img/enter.png" alt="enter"/></span></span></td>\
				</tr>\
			</table>\
			<table class="keyboard_row">\
				<tr>\
					<td><span class="keyboard_key lshift"><span class="keyboard_key-m"><img src="img/shift.png" alt="shift"/></span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">Я</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">Ч</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">С</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">М</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">И</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">Т</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">Ь</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">Б</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">Ю</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">;</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">:</span></span></td>\
					<td><span class="keyboard_key rshift"><span class="keyboard_key-m"><img src="img/shift.png" alt="shift"/></span></span></td>\
				</tr>\
			</table>\
		</div>\
		<div class="keyboard_norm keyboard_type en">\
			<table class="keyboard_row">\
				<tr>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">`</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">1</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">2</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">3</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">4</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">5</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">6</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">7</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">8</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">9</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">0</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">-</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">=</span></span></td>\
					<td><span class="keyboard_key backspace"><span class="keyboard_key-m">←</span></span></td>\
				</tr>\
			</table>\
			<table class="keyboard_row">\
				<tr>\
					<td><span class="keyboard_key atmark"><span class="keyboard_key-m">@</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">q</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">w</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">e</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">r</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">t</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">y</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">u</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">i</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">o</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">p</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">[</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">]</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">\\</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">“</span></span></td>\
				</tr>\
			</table>\
			<table class="keyboard_row">\
				<tr>\
					<td><span class="keyboard_key capslock"><span class="keyboard_key-m"><img src="img/capslock.png" alt="capslock"/></span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">a</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">s</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">d</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">f</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">g</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">h</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">j</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">k</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">l</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">;</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">\'</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">!</span></span></td>\
					<td><span class="keyboard_key enter"><span class="keyboard_key-m"><img src="img/enter.png" alt="enter"/></span></span></td>\
				</tr>\
			</table>\
			<table class="keyboard_row">\
				<tr>\
					<td><span class="keyboard_key lshift"><span class="keyboard_key-m"><img src="img/shift.png" alt="shift"/></span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">z</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">x</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">c</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">v</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">b</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">n</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">m</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">,</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">.</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">:</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">/</span></span></td>\
					<td><span class="keyboard_key rshift"><span class="keyboard_key-m"><img src="img/shift.png" alt="shift"/></span></span></td>\
				</tr>\
			</table>\
		</div>\
		<div class="keyboard_caps keyboard_type en">\
			<table class="keyboard_row">\
				<tr>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">~</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">!</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">@</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">#</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">$</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">%</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">^</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">&</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">*</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">(</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">)</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">_</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">+</span></span></td>\
					<td><span class="keyboard_key backspace"><span class="keyboard_key-m">←</span></span></td>\
				</tr>\
			</table>\
			<table class="keyboard_row">\
				<tr>\
					<td><span class="keyboard_key atmark"><span class="keyboard_key-m">@</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">Q</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">W</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">E</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">R</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">T</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">Y</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">U</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">I</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">O</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">P</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">{</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">}</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">|</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">”</span></span></td>\
				</tr>\
			</table>\
			<table class="keyboard_row">\
				<tr>\
					<td><span class="keyboard_key capslock"><span class="keyboard_key-m"><img src="img/capslock.png" alt="capslock"/></span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">A</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">S</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">D</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">F</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">G</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">H</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">J</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">K</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">L</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">:</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">"</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">?</span></span></td>\
					<td><span class="keyboard_key enter"><span class="keyboard_key-m"><img src="img/enter.png" alt="enter"/></span></span></td>\
				</tr>\
			</table>\
			<table class="keyboard_row">\
				<tr>\
					<td><span class="keyboard_key lshift"><span class="keyboard_key-m"><img src="img/shift.png" alt="shift"/></span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">Z</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">X</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">C</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">V</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">B</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">N</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">M</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m"><</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">></span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">;</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">—</span></span></td>\
					<td><span class="keyboard_key rshift"><span class="keyboard_key-m"><img src="img/shift.png" alt="shift"/></span></span></td>\
				</tr>\
			</table>\
		</div>\
		<div class="keyboard_norm keyboard_type de">\
			<table class="keyboard_row">\
				<tr>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">`</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">1</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">2</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">3</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">4</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">5</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">6</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">7</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">8</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">9</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">0</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">-</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">=</span></span></td>\
					<td><span class="keyboard_key backspace"><span class="keyboard_key-m">←</span></span></td>\
				</tr>\
			</table>\
			<table class="keyboard_row">\
				<tr>\
					<td><span class="keyboard_key atmark"><span class="keyboard_key-m">@</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">q</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">w</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">e</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">r</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">t</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">y</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">u</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">i</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">o</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">p</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">ü</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">ä</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">\\</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">«</span></span></td>\
				</tr>\
			</table>\
			<table class="keyboard_row">\
				<tr>\
					<td><span class="keyboard_key capslock"><span class="keyboard_key-m"><img src="img/capslock.png" alt="capslock"/></span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">a</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">s</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">d</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">f</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">g</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">h</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">j</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">k</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">l</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">;</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">ö</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">!</span></span></td>\
					<td><span class="keyboard_key enter"><span class="keyboard_key-m"><img src="img/enter.png" alt="enter"/></span></span></td>\
				</tr>\
			</table>\
			<table class="keyboard_row">\
				<tr>\
					<td><span class="keyboard_key lshift"><span class="keyboard_key-m"><img src="img/shift.png" alt="shift"/></span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">z</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">x</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">c</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">v</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">b</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">n</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">m</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">,</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">.</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">ß</span></span></td>\
					<td><span class="keyboard_key "><span class="keyboard_key-m">sch</span></span></td>\
					<td><span class="keyboard_key rshift"><span class="keyboard_key-m"><img src="img/shift.png" alt="shift"/></span></span></td>\
				</tr>\
			</table>\
		</div>\
		<div class="keyboard_caps keyboard_type de">\
			<table class="keyboard_row">\
				<tr>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">~</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">!</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">@</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">#</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">$</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">%</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">^</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">&</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">*</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">(</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">)</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">_</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">+</span></span></td>\
					<td><span class="keyboard_key backspace"><span class="keyboard_key-m">←</span></span></td>\
				</tr>\
			</table>\
			<table class="keyboard_row">\
				<tr>\
					<td><span class="keyboard_key atmark"><span class="keyboard_key-m">@</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">Q</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">W</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">E</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">R</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">T</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">Y</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">U</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">I</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">O</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">P</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">Ü</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">Ä</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">/</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">»</span></span></td>\
				</tr>\
			</table>\
			<table class="keyboard_row">\
				<tr>\
					<td><span class="keyboard_key capslock"><span class="keyboard_key-m"><img src="img/capslock.png" alt="capslock"/></span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">A</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">S</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">D</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">F</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">G</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">H</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">J</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">K</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">L</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">:</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">Ö</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">?</span></span></td>\
					<td><span class="keyboard_key enter"><span class="keyboard_key-m"><img src="img/enter.png" alt="enter"/></span></span></td>\
				</tr>\
			</table>\
			<table class="keyboard_row">\
				<tr>\
					<td><span class="keyboard_key lshift"><span class="keyboard_key-m"><img src="img/shift.png" alt="shift"/></span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">Z</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">X</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">C</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">V</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">B</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">N</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">M</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m"><</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">></span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">;</span></span></td>\
					<td><span class="keyboard_key sch"><span class="keyboard_key-m">Sch</span></span></td>\
					<td><span class="keyboard_key rshift"><span class="keyboard_key-m"><img src="img/shift.png" alt="shift"/></span></span></td>\
				</tr>\
			</table>\
		</div>\
		<div class="keyboard_norm keyboard_type es">\
			<table class="keyboard_row">\
				<tr>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">\\</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">1</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">2</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">3</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">4</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">5</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">6</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">7</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">8</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">9</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">0</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">-</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">=</span></span></td>\
					<td><span class="keyboard_key backspace"><span class="keyboard_key-m">←</span></span></td>\
				</tr>\
			</table>\
			<table class="keyboard_row">\
				<tr>\
					<td><span class="keyboard_key atmark"><span class="keyboard_key-m">@</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">q</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">w</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">e</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">r</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">t</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">y</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">u</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">i</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">o</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">p</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">ü</span></span></td>\
					<td><span class="keyboard_key marked" rel="acs_es_s1"><span class="keyboard_key-m">´</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">\\</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">“</span></span></td>\
				</tr>\
			</table>\
			<table class="keyboard_row">\
				<tr>\
					<td><span class="keyboard_key capslock"><span class="keyboard_key-m"><img src="img/capslock.png" alt="capslock"/></span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">a</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">s</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">d</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">f</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">g</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">h</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">j</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">k</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">l</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">;</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">ñ</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">—</span></span></td>\
					<td><span class="keyboard_key enter"><span class="keyboard_key-m"><img src="img/enter.png" alt="enter"/></span></span></td>\
				</tr>\
			</table>\
			<table class="keyboard_row">\
				<tr>\
					<td><span class="keyboard_key lshift"><span class="keyboard_key-m"><img src="img/shift.png" alt="shift"/></span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">z</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">x</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">c</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">v</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">b</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">n</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">m</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">,</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">.</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">?</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">!</span></span></td>\
					<td><span class="keyboard_key rshift"><span class="keyboard_key-m"><img src="img/shift.png" alt="shift"/></span></span></td>\
				</tr>\
			</table>\
		</div>\
		<div class="keyboard_norm keyboard_type" rel="acs_es_s1">\
			<table class="keyboard_row">\
				<tr>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">\</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">1</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">2</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">3</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">4</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">5</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">6</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">7</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">8</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">9</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">0</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">-</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">=</span></span></td>\
					<td><span class="keyboard_key backspace"><span class="keyboard_key-m">←</span></span></td>\
				</tr>\
			</table>\
			<table class="keyboard_row">\
				<tr>\
					<td><span class="keyboard_key atmark"><span class="keyboard_key-m">@</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">q</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">w</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">é</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">r</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">t</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">y</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">ú</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">í</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">ó</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">p</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">ü</span></span></td>\
					<td><span class="keyboard_key marked" rel="acs_es_s1"><span class="keyboard_key-m">´</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">\</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">“</span></span></td>\
				</tr>\
			</table>\
			<table class="keyboard_row">\
				<tr>\
					<td><span class="keyboard_key capslock"><span class="keyboard_key-m"><img src="img/capslock.png" alt="capslock"/></span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">á</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">s</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">d</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">f</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">g</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">h</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">j</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">k</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">l</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">;</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">ñ</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">—</span></span></td>\
					<td><span class="keyboard_key enter"><span class="keyboard_key-m"><img src="img/enter.png" alt="enter"/></span></span></td>\
				</tr>\
			</table>\
			<table class="keyboard_row">\
				<tr>\
					<td><span class="keyboard_key lshift"><span class="keyboard_key-m"><img src="img/shift.png" alt="shift"/></span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">z</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">x</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">c</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">v</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">b</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">n</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">m</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">,</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">.</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">?</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">!</span></span></td>\
					<td><span class="keyboard_key rshift"><span class="keyboard_key-m"><img src="img/shift.png" alt="shift"/></span></span></td>\
				</tr>\
			</table>\
		</div>\
		<div class="keyboard_caps keyboard_type es">\
			<table class="keyboard_row">\
				<tr>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">~</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">!</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">@</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">#</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">$</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">%</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">^</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">&</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">*</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">(</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">)</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">_</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">+</span></span></td>\
					<td><span class="keyboard_key backspace"><span class="keyboard_key-m">←</span></span></td>\
				</tr>\
			</table>\
			<table class="keyboard_row">\
				<tr>\
					<td><span class="keyboard_key atmark"><span class="keyboard_key-m">@</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">Q</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">W</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">E</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">R</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">T</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">Y</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">U</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">I</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">O</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">P</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">Ü</span></span></td>\
					<td><span class="keyboard_key marked" rel="acs_es_l1"><span class="keyboard_key-m">´</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">/</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">”</span></span></td>\
				</tr>\
			</table>\
			<table class="keyboard_row">\
				<tr>\
					<td><span class="keyboard_key capslock"><span class="keyboard_key-m"><img src="img/capslock.png" alt="capslock"/></span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">A</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">S</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">D</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">F</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">G</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">H</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">J</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">K</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">L</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">:</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">Ñ</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">|</span></span></td>\
					<td><span class="keyboard_key enter"><span class="keyboard_key-m"><img src="img/enter.png" alt="enter"/></span></span></td>\
				</tr>\
			</table>\
			<table class="keyboard_row">\
				<tr>\
					<td><span class="keyboard_key lshift"><span class="keyboard_key-m"><img src="img/shift.png" alt="shift"/></span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">Z</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">X</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">C</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">V</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">B</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">N</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">M</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m"><</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">></span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">¿</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">¡</span></span></td>\
					<td><span class="keyboard_key rshift"><span class="keyboard_key-m"><img src="img/shift.png" alt="shift"/></span></span></td>\
				</tr>\
			</table>\
		</div>\
		<div class="keyboard_caps keyboard_type" rel="acs_es_l1">\
			<table class="keyboard_row">\
				<tr>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">~</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">!</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">@</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">#</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">$</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">%</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">^</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">&</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">*</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">(</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">)</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">_</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">+</span></span></td>\
					<td><span class="keyboard_key backspace"><span class="keyboard_key-m">←</span></span></td>\
				</tr>\
			</table>\
			<table class="keyboard_row">\
				<tr>\
					<td><span class="keyboard_key atmark"><span class="keyboard_key-m">@</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">Q</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">W</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">É</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">R</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">T</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">Y</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">Ú</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">Í</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">Ó</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">P</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">Ü</span></span></td>\
					<td><span class="keyboard_key marked" rel="acs_es_l1"><span class="keyboard_key-m">´</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">/</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">”</span></span></td>\
				</tr>\
			</table>\
			<table class="keyboard_row">\
				<tr>\
					<td><span class="keyboard_key capslock"><span class="keyboard_key-m"><img src="img/capslock.png" alt="capslock"/></span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">Á</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">S</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">D</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">F</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">G</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">H</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">J</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">K</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">L</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">:</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">Ñ</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">|</span></span></td>\
					<td><span class="keyboard_key enter"><span class="keyboard_key-m"><img src="img/enter.png" alt="enter"/></span></span></td>\
				</tr>\
			</table>\
			<table class="keyboard_row">\
				<tr>\
					<td><span class="keyboard_key lshift"><span class="keyboard_key-m"><img src="img/shift.png" alt="shift"/></span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">Z</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">X</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">C</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">V</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">B</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">N</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">M</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m"><</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">></span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">¿</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">¡</span></span></td>\
					<td><span class="keyboard_key rshift"><span class="keyboard_key-m"><img src="img/shift.png" alt="shift"/></span></span></td>\
				</tr>\
			</table>\
		</div>\
		<div class="keyboard_norm keyboard_type fr">\
			<table class="keyboard_row">\
				<tr>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">`</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">1</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">2</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">3</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">4</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">5</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">6</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">7</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">8</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">9</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">0</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">-</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">=</span></span></td>\
					<td><span class="keyboard_key backspace"><span class="keyboard_key-m">←</span></span></td>\
				</tr>\
			</table>\
			<table class="keyboard_row">\
				<tr>\
					<td><span class="keyboard_key atmark"><span class="keyboard_key-m">@</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">q</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">w</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">e</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">r</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">t</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">y</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">u</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">i</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">o</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">p</span></span></td>\
					<td><span class="keyboard_key marked" rel="acs_s1"><span class="keyboard_key-m">^</span></span></td>\
					<td><span class="keyboard_key marked" rel="acs_s2"><span class="keyboard_key-m">¨</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">é</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">!</span></span></td>\
				</tr>\
			</table>\
			<table class="keyboard_row">\
				<tr>\
					<td><span class="keyboard_key capslock"><span class="keyboard_key-m"><img src="img/capslock.png" alt="capslock"/></span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">a</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">s</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">d</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">f</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">g</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">h</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">j</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">k</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">l</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">;</span></span></td>\
					<td><span class="keyboard_key marked" rel="acs_s3"><span class="keyboard_key-m">`</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">\'</span></span></td>\
					<td><span class="keyboard_key enter"><span class="keyboard_key-m"><img src="img/enter.png" alt="enter"/></span></span></td>\
				</tr>\
			</table>\
			<table class="keyboard_row">\
				<tr>\
					<td><span class="keyboard_key lshift"><span class="keyboard_key-m"><img src="img/shift.png" alt="shift"/></span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">z</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">x</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">c</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">v</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">b</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">n</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">m</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">,</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">.</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">ç</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">œ</span></span></td>\
					<td><span class="keyboard_key rshift"><span class="keyboard_key-m"><img src="img/shift.png" alt="shift"/></span></span></td>\
				</tr>\
			</table>\
		</div>\
		<div class="keyboard_norm keyboard_type" rel="acs_s1">\
			<table class="keyboard_row">\
				<tr>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">`</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">1</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">2</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">3</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">4</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">5</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">6</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">7</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">8</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">9</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">0</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">-</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">=</span></span></td>\
					<td><span class="keyboard_key backspace"><span class="keyboard_key-m">←</span></span></td>\
				</tr>\
			</table>\
			<table class="keyboard_row">\
				<tr>\
					<td><span class="keyboard_key atmark"><span class="keyboard_key-m">@</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">q</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">w</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">ê</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">r</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">t</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">y</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">û</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">î</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">ô</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">p</span></span></td>\
					<td><span class="keyboard_key marked" rel="acs_s1"><span class="keyboard_key-m">^</span></span></td>\
					<td><span class="keyboard_key marked" rel="acs_s2"><span class="keyboard_key-m">¨</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">é</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">!</span></span></td>\
				</tr>\
			</table>\
			<table class="keyboard_row">\
				<tr>\
					<td><span class="keyboard_key capslock"><span class="keyboard_key-m"><img src="img/capslock.png" alt="capslock"/></span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">â</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">s</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">d</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">f</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">g</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">h</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">j</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">k</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">l</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">;</span></span></td>\
					<td><span class="keyboard_key marked" rel="acs_s3"><span class="keyboard_key-m">`</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">\'</span></span></td>\
					<td><span class="keyboard_key enter"><span class="keyboard_key-m"><img src="img/enter.png" alt="enter"/></span></span></td>\
				</tr>\
			</table>\
			<table class="keyboard_row">\
				<tr>\
					<td><span class="keyboard_key lshift"><span class="keyboard_key-m"><img src="img/shift.png" alt="shift"/></span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">z</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">x</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">c</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">v</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">b</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">n</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">m</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">,</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">.</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">ç</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">œ</span></span></td>\
					<td><span class="keyboard_key rshift"><span class="keyboard_key-m"><img src="img/shift.png" alt="shift"/></span></span></td>\
				</tr>\
			</table>\
		</div>\
		<div class="keyboard_norm keyboard_type" rel="acs_s2">\
			<table class="keyboard_row">\
				<tr>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">`</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">1</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">2</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">3</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">4</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">5</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">6</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">7</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">8</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">9</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">0</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">-</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">=</span></span></td>\
					<td><span class="keyboard_key backspace"><span class="keyboard_key-m">←</span></span></td>\
				</tr>\
			</table>\
			<table class="keyboard_row">\
				<tr>\
					<td><span class="keyboard_key atmark"><span class="keyboard_key-m">@</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">q</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">w</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">ë</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">r</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">t</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">ÿ</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">ü</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">ï</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">o</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">p</span></span></td>\
					<td><span class="keyboard_key marked" rel="acs_s1"><span class="keyboard_key-m">^</span></span></td>\
					<td><span class="keyboard_key marked" rel="acs_s2"><span class="keyboard_key-m">¨</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">é</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">!</span></span></td>\
				</tr>\
			</table>\
			<table class="keyboard_row">\
				<tr>\
					<td><span class="keyboard_key capslock"><span class="keyboard_key-m"><img src="img/capslock.png" alt="capslock"/></span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">a</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">s</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">d</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">f</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">g</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">h</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">j</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">k</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">l</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">;</span></span></td>\
					<td><span class="keyboard_key marked" rel="acs_s3"><span class="keyboard_key-m">`</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">\'</span></span></td>\
					<td><span class="keyboard_key enter"><span class="keyboard_key-m"><img src="img/enter.png" alt="enter"/></span></span></td>\
				</tr>\
			</table>\
			<table class="keyboard_row">\
				<tr>\
					<td><span class="keyboard_key lshift"><span class="keyboard_key-m"><img src="img/shift.png" alt="shift"/></span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">z</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">x</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">c</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">v</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">b</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">n</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">m</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">,</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">.</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">ç</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">œ</span></span></td>\
					<td><span class="keyboard_key rshift"><span class="keyboard_key-m"><img src="img/shift.png" alt="shift"/></span></span></td>\
				</tr>\
			</table>\
		</div>\
		<div class="keyboard_norm keyboard_type" rel="acs_s3">\
			<table class="keyboard_row">\
				<tr>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">`</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">1</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">2</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">3</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">4</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">5</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">6</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">7</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">8</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">9</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">0</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">-</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">=</span></span></td>\
					<td><span class="keyboard_key backspace"><span class="keyboard_key-m">←</span></span></td>\
				</tr>\
			</table>\
			<table class="keyboard_row">\
				<tr>\
					<td><span class="keyboard_key atmark"><span class="keyboard_key-m">@</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">q</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">w</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">è</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">r</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">t</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">y</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">ù</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">i</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">o</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">p</span></span></td>\
					<td><span class="keyboard_key marked" rel="acs_s1"><span class="keyboard_key-m">^</span></span></td>\
					<td><span class="keyboard_key marked" rel="acs_s2"><span class="keyboard_key-m">¨</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">é</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">!</span></span></td>\
				</tr>\
			</table>\
			<table class="keyboard_row">\
				<tr>\
					<td><span class="keyboard_key capslock"><span class="keyboard_key-m"><img src="img/capslock.png" alt="capslock"/></span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">à</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">s</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">d</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">f</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">g</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">h</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">j</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">k</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">l</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">;</span></span></td>\
					<td><span class="keyboard_key marked" rel="acs_s3"><span class="keyboard_key-m">`</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">\'</span></span></td>\
					<td><span class="keyboard_key enter"><span class="keyboard_key-m"><img src="img/enter.png" alt="enter"/></span></span></td>\
				</tr>\
			</table>\
			<table class="keyboard_row">\
				<tr>\
					<td><span class="keyboard_key lshift"><span class="keyboard_key-m"><img src="img/shift.png" alt="shift"/></span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">z</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">x</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">c</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">v</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">b</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">n</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">m</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">,</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">.</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">ç</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">œ</span></span></td>\
					<td><span class="keyboard_key rshift"><span class="keyboard_key-m"><img src="img/shift.png" alt="shift"/></span></span></td>\
				</tr>\
			</table>\
		</div>\
		<div class="keyboard_caps keyboard_type fr">\
			<table class="keyboard_row">\
				<tr>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">~</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">!</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">@</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">#</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">$</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">%</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">^</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">&</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">*</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">(</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">)</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">_</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">+</span></span></td>\
					<td><span class="keyboard_key backspace"><span class="keyboard_key-m">←</span></span></td>\
				</tr>\
			</table>\
			<table class="keyboard_row">\
				<tr>\
					<td><span class="keyboard_key atmark"><span class="keyboard_key-m">@</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">Q</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">W</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">E</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">R</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">T</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">Y</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">U</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">I</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">O</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">P</span></span></td>\
					<td><span class="keyboard_key marked" rel="acs_fr_l1"><span class="keyboard_key-m">^</span></span></td>\
					<td><span class="keyboard_key marked" rel="acs_fr_l2"><span class="keyboard_key-m">¨</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">É</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">?</span></span></td>\
				</tr>\
			</table>\
			<table class="keyboard_row">\
				<tr>\
					<td><span class="keyboard_key capslock"><span class="keyboard_key-m"><img src="img/capslock.png" alt="capslock"/></span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">A</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">S</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">D</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">F</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">G</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">H</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">J</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">K</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">L</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">:</span></span></td>\
					<td><span class="keyboard_key marked" rel="acs_fr_l3"><span class="keyboard_key-m">`</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">"</span></span></td>\
					<td><span class="keyboard_key enter"><span class="keyboard_key-m"><img src="img/enter.png" alt="enter"/></span></span></td>\
				</tr>\
			</table>\
			<table class="keyboard_row">\
				<tr>\
					<td><span class="keyboard_key lshift"><span class="keyboard_key-m"><img src="img/shift.png" alt="shift"/></span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">Z</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">X</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">C</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">V</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">B</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">N</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">M</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m"><</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">></span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">Ç</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">Œ</span></span></td>\
					<td><span class="keyboard_key rshift"><span class="keyboard_key-m"><img src="img/shift.png" alt="shift"/></span></span></td>\
				</tr>\
			</table>\
		</div>\
		<div class="keyboard_caps keyboard_type" rel="acs_fr_l3">\
			<table class="keyboard_row">\
				<tr>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">~</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">!</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">@</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">#</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">$</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">%</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">^</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">&</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">*</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">(</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">)</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">_</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">+</span></span></td>\
					<td><span class="keyboard_key backspace"><span class="keyboard_key-m">←</span></span></td>\
				</tr>\
			</table>\
			<table class="keyboard_row">\
				<tr>\
					<td><span class="keyboard_key atmark"><span class="keyboard_key-m">@</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">Q</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">W</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">È</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">R</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">T</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">Y</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">Ù</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">I</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">O</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">P</span></span></td>\
					<td><span class="keyboard_key marked" rel="acs_fr_l1"><span class="keyboard_key-m">^</span></span></td>\
					<td><span class="keyboard_key marked" rel="acs_fr_l2"><span class="keyboard_key-m">¨</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">É</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">?</span></span></td>\
				</tr>\
			</table>\
			<table class="keyboard_row">\
				<tr>\
					<td><span class="keyboard_key capslock"><span class="keyboard_key-m"><img src="img/capslock.png" alt="capslock"/></span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">À</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">S</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">D</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">F</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">G</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">H</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">J</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">K</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">L</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">:</span></span></td>\
					<td><span class="keyboard_key marked" rel="acs_fr_l3"><span class="keyboard_key-m">`</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">"</span></span></td>\
					<td><span class="keyboard_key enter"><span class="keyboard_key-m"><img src="img/enter.png" alt="enter"/></span></span></td>\
				</tr>\
			</table>\
			<table class="keyboard_row">\
				<tr>\
					<td><span class="keyboard_key lshift"><span class="keyboard_key-m"><img src="img/shift.png" alt="shift"/></span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">Z</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">X</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">C</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">V</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">B</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">N</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">M</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m"><</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">></span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">Ç</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">Œ</span></span></td>\
					<td><span class="keyboard_key rshift"><span class="keyboard_key-m"><img src="img/shift.png" alt="shift"/></span></span></td>\
				</tr>\
			</table>\
		</div>\
		<div class="keyboard_caps keyboard_type" rel="acs_fr_l1">\
			<table class="keyboard_row">\
				<tr>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">~</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">!</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">@</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">#</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">$</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">%</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">^</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">&</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">*</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">(</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">)</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">_</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">+</span></span></td>\
					<td><span class="keyboard_key backspace"><span class="keyboard_key-m">←</span></span></td>\
				</tr>\
			</table>\
			<table class="keyboard_row">\
				<tr>\
					<td><span class="keyboard_key atmark"><span class="keyboard_key-m">@</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">Q</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">W</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">Ê</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">R</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">T</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">Y</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">Û</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">Î</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">Ô</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">P</span></span></td>\
					<td><span class="keyboard_key marked" rel="acs_fr_l1"><span class="keyboard_key-m">^</span></span></td>\
					<td><span class="keyboard_key marked" rel="acs_fr_l2"><span class="keyboard_key-m">¨</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">É</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">?</span></span></td>\
				</tr>\
			</table>\
			<table class="keyboard_row">\
				<tr>\
					<td><span class="keyboard_key capslock"><span class="keyboard_key-m"><img src="img/capslock.png" alt="capslock"/></span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">Â</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">S</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">D</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">F</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">G</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">H</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">J</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">K</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">L</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">:</span></span></td>\
					<td><span class="keyboard_key marked" rel="acs_fr_l3"><span class="keyboard_key-m">`</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">"</span></span></td>\
					<td><span class="keyboard_key enter"><span class="keyboard_key-m"><img src="img/enter.png" alt="enter"/></span></span></td>\
				</tr>\
			</table>\
			<table class="keyboard_row">\
				<tr>\
					<td><span class="keyboard_key lshift"><span class="keyboard_key-m"><img src="img/shift.png" alt="shift"/></span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">Z</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">X</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">C</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">V</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">B</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">N</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">M</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m"><</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">></span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">Ç</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">Œ</span></span></td>\
					<td><span class="keyboard_key rshift"><span class="keyboard_key-m"><img src="img/shift.png" alt="shift"/></span></span></td>\
				</tr>\
			</table>\
		</div>\
		<div class="keyboard_caps keyboard_type" rel="acs_fr_l2">\
			<table class="keyboard_row">\
				<tr>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">~</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">!</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">@</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">#</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">$</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">%</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">^</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">&</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">*</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">(</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">)</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">_</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">+</span></span></td>\
					<td><span class="keyboard_key backspace"><span class="keyboard_key-m">←</span></span></td>\
				</tr>\
			</table>\
			<table class="keyboard_row">\
				<tr>\
					<td><span class="keyboard_key atmark"><span class="keyboard_key-m">@</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">Q</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">W</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">Ë</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">R</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">T</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">Ÿ</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">Ü</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">Ï</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">O</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">P</span></span></td>\
					<td><span class="keyboard_key marked" rel="acs_fr_l1"><span class="keyboard_key-m">^</span></span></td>\
					<td><span class="keyboard_key marked" rel="acs_fr_l2"><span class="keyboard_key-m">¨</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">É</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">?</span></span></td>\
				</tr>\
			</table>\
			<table class="keyboard_row">\
				<tr>\
					<td><span class="keyboard_key capslock"><span class="keyboard_key-m"><img src="img/capslock.png" alt="capslock"/></span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">A</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">S</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">D</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">F</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">G</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">H</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">J</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">K</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">L</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">:</span></span></td>\
					<td><span class="keyboard_key marked" rel="acs_fr_l3"><span class="keyboard_key-m">`</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">"</span></span></td>\
					<td><span class="keyboard_key enter"><span class="keyboard_key-m"><img src="img/enter.png" alt="enter"/></span></span></td>\
				</tr>\
			</table>\
			<table class="keyboard_row">\
				<tr>\
					<td><span class="keyboard_key lshift"><span class="keyboard_key-m"><img src="img/shift.png" alt="shift"/></span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">Z</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">X</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">C</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">V</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">B</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">N</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">M</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m"><</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">></span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">Ç</span></span></td>\
					<td><span class="keyboard_key disabled"><span class="keyboard_key-m">Œ</span></span></td>\
					<td><span class="keyboard_key rshift"><span class="keyboard_key-m"><img src="img/shift.png" alt="shift"/></span></span></td>\
				</tr>\
			</table>\
		</div>\
		<div class="keyboard_type" rel="alt">\
			<table class="keyboard_row">\
				<tr>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">°</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">±</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">¼</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">½</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">¾</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">¤</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">¬</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">²</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">³</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">¢</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">€</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">£</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">μ</span></span></td>\
					<td><span class="keyboard_key backspace"><span class="keyboard_key-m">←</span></span></td>\
				</tr>\
			</table>\
			<table class="keyboard_row">\
				<tr>\
					<td><span class="keyboard_key atmark"><span class="keyboard_key-m">@</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">~</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">§</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">¶</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">:</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">;</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m"></span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">\'</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">"</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">«</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">»</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">[</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">]</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">{</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">}</span></span></td>\
				</tr>\
			</table>\
			<table class="keyboard_row">\
				<tr>\
					<td><span class="keyboard_key capslock"><span class="keyboard_key-m"><img src="img/capslock.png" alt="capslock"/></span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m"></span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m"></span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m"></span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m"></span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">‘</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">’</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">„</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">“</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">”</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m"></span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">!</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">?</span></span></td>\
					<td><span class="keyboard_key enter"><span class="keyboard_key-m"><img src="img/enter.png" alt="enter"/></span></span></td>\
				</tr>\
			</table>\
			<table class="keyboard_row">\
				<tr>\
					<td><span class="keyboard_key lshift"><span class="keyboard_key-m"><img src="img/shift.png" alt="shift"/></span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m"></span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m"></span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m"></span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m"></span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m"><</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">></span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">–</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">—</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">\\</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">|</span></span></td>\
					<td><span class="keyboard_key"><span class="keyboard_key-m">/</span></span></td>\
					<td><span class="keyboard_key rshift"><span class="keyboard_key-m"><img src="img/shift.png" alt="shift"/></span></span></td>\
				</tr>\
			</table>\
		</div>\
		<table class="keyboard_row">\
			<tr>\
				<td>\
					<div class="keyboard_lang">\
						<div class="keyboard_lang-i">\
							<span class="b-dropdowna__switcher"></span>\
							<div class="keyboard_lang-selector">\
								<ul class="b-menu__layout-vert">\
									<li><div class="b-menu__item" rel="en"><a class="keyboard_lang-en" href="#"><i class="keyboard_lang-ic"></i>English</a></div></li>\
									<li><div class="b-menu__item" rel="de"><a class="keyboard_lang-de" href="#"><i class="keyboard_lang-ic"></i>Deutsch</a></div></li>\
									<li><div class="b-menu__item" rel="ru"><a class="keyboard_lang-ru" href="#"><i class="keyboard_lang-ic"></i>Русский</a></div></li>\
									<li><div class="b-menu__item" rel="es"><a class="keyboard_lang-es" href="#"><i class="keyboard_lang-ic"></i>Español</a></div></li>\
									<li><div class="b-menu__item" rel="fr"><a class="keyboard_lang-fr" href="#"><i class="keyboard_lang-ic"></i>Français</a></div></li>\
								</ul>\
							</div>\
						</div>\
					</div>\
				</td>\
				<td><span class="keyboard_key space"><span class="keyboard_key-m"> </span></span></td>\
				<td><span class="keyboard_key spacer"></span></td>\
				<td><span class="keyboard_key marked alt" rel="alt"><span class="keyboard_key-m">« » { } ~</span></span></td>\
			</tr>\
		</table>\
		';
		var $this = $(this);
		var $ico = $('<span class="keyboard_ico"></span>');
		var $keyboard = $('<div class="key_board"></div>');
		$keyboard.html(keyboard);
		$this.after($ico);
		$this.after($keyboard);
		var capsMode = false;
		var shiftMode = false;
		var altMode = false;
		$ico.css({
			top: ($this.outerHeight()-$ico.height())/2+$this.offset().top,
			left: $this.outerWidth()+$this.offset().left-($this.outerHeight()-$ico.height())/2-$ico.width()
		});
		$keyboard.find('.keyboard_type').hide();
		$keyboard.find('.keyboard_norm'+'.'+options.lang).show();
		$keyboard.find('.b-dropdowna__switcher').html($keyboard.find('.b-menu__item[rel='+options.lang+']').html());
		$keyboard.mousedown(function(){
			return false;
		});
		$keyboard.on('mousedown', '.keyboard_key:not(.disabled)', function(){
			$(this).addClass('pressed');
			if($(this).hasClass('backspace')){
				$this.val($this.val().substring(0, $this.val().length - 1));
			}else if($(this).hasClass('rshift') || $(this).hasClass('lshift')){
				$keyboard.find('.keyboard_type').hide();
				if(capsMode){
					$keyboard.find('.rshift, .lshift, .capslock').removeClass('suppressed');
					capsMode = false;
					shiftMode = false;
					$keyboard.find('.keyboard_norm'+'.'+options.lang).show();
				}else{
					$keyboard.find('.rshift, .lshift').addClass('suppressed');
					capsMode = true;
					shiftMode = true;
					$keyboard.find('.keyboard_key[rel]').removeClass('suppressed');
					altMode = false;
					$keyboard.find('.keyboard_caps'+'.'+options.lang).show();
				}
			}else if($(this).hasClass('capslock')){
				$keyboard.find('.keyboard_type').hide();
				if(capsMode){
					$keyboard.find('.rshift, .lshift, .capslock').removeClass('suppressed');
					capsMode = false;
					shiftMode = false;
					$keyboard.find('.keyboard_norm'+'.'+options.lang).show();
				}else{
					$keyboard.find('.capslock').addClass('suppressed');
					capsMode = true;
					$keyboard.find('.keyboard_key[rel]').removeClass('suppressed');
					altMode = false;
					$keyboard.find('.keyboard_caps'+'.'+options.lang).show();
				}
			}else if($(this).hasClass('enter')){
				$this.closest('form').submit();
			}else if($(this).hasClass('marked')){
				$keyboard.find('.keyboard_type').hide();
				if(altMode == $(this).attr('rel')){
					$keyboard.find('.keyboard_key[rel]').removeClass('suppressed');
					altMode = false;
					$keyboard.find('.keyboard_norm'+'.'+options.lang).show();
				}else{
					$keyboard.find('.keyboard_key[rel]').removeClass('suppressed');
					$keyboard.find('.keyboard_key[rel='+$(this).attr('rel')+']').addClass('suppressed');
					altMode = $(this).attr('rel');
					$keyboard.find('.capslock').removeClass('suppressed');
					capsMode = false;
					$keyboard.find('.keyboard_type[rel='+$(this).attr('rel')+']').show();
				}
			}else{
				$this.val($this.val()+$(this).find('.keyboard_key-m').text());
			}
			return false;
		});
		$keyboard.on('mouseup', '.keyboard_key', function(){
			$keyboard.find('.keyboard_key').removeClass('pressed');
			$this.focus();
			if(shiftMode && !$(this).hasClass('rshift') && !$(this).hasClass('lshift') && !altMode){
				$keyboard.find('.keyboard_type').hide();
				$keyboard.find('.rshift, .lshift, .capslock').removeClass('suppressed');
				capsMode = false;
				shiftMode = false;
				$keyboard.find('.keyboard_norm'+'.'+options.lang).show();
			}
		});
		$keyboard.on('click', '.b-dropdowna__switcher', function(e){
			e.stopPropagation();
			$keyboard.find('.keyboard_lang-selector').fadeIn(100);
		});
		$('body').click(function(){
			$keyboard.find('.keyboard_lang-selector').hide();
			return false;
		});
		$ico.click(function(){
			$keyboard.css({left:'', right:''});
			$keyboard.css({top:$this.offset().top + 30, left:$this.offset().left}).fadeToggle(0);
			if($keyboard.offset().left+$keyboard.width() > $(window).width()){
				$keyboard.css({left:'', right:10});
			}
			$ico.toggleClass('active');
		});
		$keyboard.find('.keyboard_close').click(function(){
			$keyboard.fadeOut(0);
			$ico.removeClass('active');
		});
		$keyboard.on('click', '.b-menu__item', function(){
			options.lang = $(this).attr('rel');
			capsMode = false;
			shiftMode = false;
			altMode = false;
			$keyboard.find('.rshift, .lshift, .capslock, .alt').removeClass('suppressed');
			$keyboard.find('.keyboard_type').hide();
			$keyboard.find('.keyboard_norm'+'.'+options.lang).show();
			$keyboard.find('.b-dropdowna__switcher').html($(this).html());
			$keyboard.find('.keyboard_lang-selector').hide();
		});
	};
	return this.each(make);
};
})(jQuery);