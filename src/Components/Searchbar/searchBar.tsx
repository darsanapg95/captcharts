
export default function Searchbar() {
    return (
        <div>
            <input
            type="text" 
            placeholder="Search..." 
            style={
                {
                    width:'205px',
                    height:'51px',
                    borderRadius:'45px',
                    border:'1px solid #E7AD99',
                    backgroundColor:'white',
                    padding:'0 0 0 20px',
                }
            }
            />
        </div>
    );
}