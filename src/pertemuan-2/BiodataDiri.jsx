export default function BiodataDiri() { //parent component Memanggil komponen lain di dalamnya
  return (
    <div>
      <HeaderBio />      
      <Greating />    
      
      <StatusBadge /> 
      
      <UserCard       
        nama="Aliya Rahma"
        nim="2457301008"
        tanggal="18 Agustus 2005"
        alamat="Pekanbaru, Riau"
        hobi="Menonton Film"
        prodi="Sistem Informasi"
        Kampus="Politeknik Caltex Riau"
      />
      
      <QuoteText />    
      <SocialMedia />   
    </div>
  )
}

// --- 6 CHILD COMPONENTS ---

function HeaderBio() {
  return (
    <div>
      <h2 style={{ color: '#d48fa6', marginBottom: '5px' }}>Biodata Saya</h2>
      <p style={{ textAlign: 'center', margin: '0' }}>Selamat Belajar ReactJs</p>
    </div>
  );
}

function Greating() { 
  return (
    <p style={{ textAlign: 'center', fontSize: '0.9rem', fontStyle: 'italic', color: '#b5a1a8' }}>
      Semoga Belajar ReactJs Menyenangkan
    </p>
  )
}

function StatusBadge() {
  return (
    <div style={{ textAlign: 'center', margin: '10px 0' }}>
      <span style={{ 
        fontSize: '0.7rem', 
        padding: '3px 12px', 
        borderRadius: '50px', 
        background: '#ffe8ef', 
        color: '#d48fa6',
        border: '1px solid #f1dce3'
      }}>
        ● Active Student
      </span>
    </div>
  );
}

function UserCard(props) { //child yang pakai props
  return (
    <div style={{ textAlign: 'left', display: 'inline-block', width: '100%' }}>
      <hr/>
      <p><strong>Nama:</strong> {props.nama}</p>
      <p><strong>NIM:</strong> {props.nim}</p>
      <p><strong>Tanggal Lahir:</strong> {props.tanggal}</p>
      <p><strong>Alamat:</strong> {props.alamat}</p>
      <p><strong>Hobi:</strong> {props.hobi}</p>
      <p><strong>Prodi:</strong> {props.prodi}</p>
      <p><strong>Kampus:</strong> {props.Kampus}</p>
    </div>
  )
}

function QuoteText() { 
  const text = "ctrl + s = self care";
  const text2 = "mentally debugging… please wait";
  return (
    <div>
      <hr/>
      <p style={{ textAlign: 'center', fontWeight: 'bold', color: '#d48fa6' }}>
        {text.toUpperCase()}
      </p>
      <p style={{ textAlign: 'center' }}>
        <small style={{ color: '#b5a1a8' }}>{text2.toLowerCase()}</small>
      </p>
    </div>
  )
}

function SocialMedia() {
  return (
    <div style={{ marginTop: '15px', textAlign: 'center', fontSize: '0.8rem', color: '#d48fa6' }}>
      Instagram: @aliya_rahma
    </div>
  );
}