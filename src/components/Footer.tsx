type Props = {}

const Footer = (props: Props) => {
  return (
    <footer>
        <div className="w-full bg-textSecondary p-2 sticky bottom-0">
            <div className="w-11/12 mx-auto">
                <div className="flex flex-col gap-2 justify-between items-center md:flex-row">
                    <p className="text-textPrimary font-normal text-md">&copy;2023 Repair Raccoons. All Rights Reserved</p>
                    <p className="text-textPrimary font-normal text-md">Privacy Policy & Terms And Conditions</p>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer