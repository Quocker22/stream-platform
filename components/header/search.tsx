import { Button } from '@nextui-org/button'
import { Input } from '@nextui-org/input'
import { HiOutlineSearch } from 'react-icons/hi'

const Search = (): JSX.Element => {
  return (
    <div className='relative w-full'>
      <Input placeholder='Bạn muốn tìm kiếm điều gì?...' type='search' variant='bordered' />
      <Button className='absolute right-0 top-0 min-w-fit !rounded-l-none'>
        <HiOutlineSearch className='size-5' />
      </Button>
    </div>
  )
}

export { Search }
