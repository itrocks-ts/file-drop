import { build }    from '../build/build.js'
import { fileDrop } from './file-drop.js'

build<HTMLInputElement>('input[type=file]', element => fileDrop(element))
